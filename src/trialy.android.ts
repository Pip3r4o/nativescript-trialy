import { Common } from './trialy.common';
import * as util from 'tns-core-modules/utils//utils';

declare module io {
    module trialy {
        module library {
            export class Trialy {
                constructor(context: any, trialy_key: string);
                checkTrial(trial_sku, callback: TrialyCallback);
                startTrial(trial_sku, callback: TrialyCallback);

                static STATUS_TRIAL_JUST_STARTED: number;
                static STATUS_TRIAL_RUNNING: number;
                static STATUS_TRIAL_JUST_ENDED: number;
                static STATUS_TRIAL_NOT_YET_STARTED: number;
                static STATUS_TRIAL_OVER: number;
                static ERROR_CONTACTING_SERVER: number;
                static ERROR_APP_NOT_FOUND: number;
                static ERROR_TRIAL_SKU_NOT_FOUND: number;
            }

            export class TrialyCallback {
                constructor(implementation: {
                    onResult(status: number, timeRemaining: number, sku: string);
                });
            }
        }
    }
}

const TRIALY_NOT_INITIALIZED = "Trialy not initialized. Call Trialy.Initialize.";
const TRIALY_ALREADY_INITIALIZED = "Trialy is already initialized.";
const TRIALY_STATUS_MAP = {};
TRIALY_STATUS_MAP[io.trialy.library.Trialy.STATUS_TRIAL_JUST_STARTED] = Trialy.STATUS_TRIAL_JUST_STARTED;
TRIALY_STATUS_MAP[io.trialy.library.Trialy.STATUS_TRIAL_JUST_ENDED] = Trialy.STATUS_TRIAL_JUST_ENDED;
TRIALY_STATUS_MAP[io.trialy.library.Trialy.STATUS_TRIAL_NOT_YET_STARTED] = Trialy.STATUS_TRIAL_NOT_YET_STARTED;
TRIALY_STATUS_MAP[io.trialy.library.Trialy.STATUS_TRIAL_RUNNING] = Trialy.STATUS_TRIAL_RUNNING;
TRIALY_STATUS_MAP[io.trialy.library.Trialy.STATUS_TRIAL_OVER] = Trialy.STATUS_TRIAL_OVER;
TRIALY_STATUS_MAP[io.trialy.library.Trialy.ERROR_CONTACTING_SERVER] = Trialy.ERROR_CONTACTING_SERVER;
TRIALY_STATUS_MAP[io.trialy.library.Trialy.ERROR_APP_NOT_FOUND] = Trialy.ERROR_APP_NOT_FOUND;
TRIALY_STATUS_MAP[io.trialy.library.Trialy.ERROR_TRIAL_SKU_NOT_FOUND] = Trialy.ERROR_TRIAL_SKU_NOT_FOUND;

export class Trialy extends Common {
    private static trialyInstance: io.trialy.library.Trialy;

    static Initialize(trialy_app_key: string) {
        if (Trialy.trialyInstance) {
            throw TRIALY_ALREADY_INITIALIZED;
        }

        try {
            Trialy.trialyInstance = new io.trialy.library.Trialy(util.ad.getApplicationContext(), trialy_app_key);
        } catch (e) {
            console.log("An error was thrown while initializing Trialy for Android.");
            console.log(e);

            throw e;
        }
    }

    static CheckTrial(trial_sku: string, callback: (status: string, timeRemaining: number) => void) {
        if (!Trialy.trialyInstance) {
            throw TRIALY_NOT_INITIALIZED;
        }

        Trialy.trialyInstance.checkTrial(trial_sku, getTrialyCallback(callback));
    }

    static StartTrial(trial_sku: string, callback: (status: string, timeRemaining: number) => void) {
        if (!Trialy.trialyInstance) {
            throw TRIALY_NOT_INITIALIZED;
        }

        Trialy.trialyInstance.startTrial(trial_sku, getTrialyCallback(callback));
    }
}

function getTrialyCallback(callback: (status: string, timeRemaining: number) => void) {
    return new io.trialy.library.TrialyCallback({
        onResult(status: number, timeRemaining: number, sku: string) {
            callback(TRIALY_STATUS_MAP[status], timeRemaining);
        }
    });
}