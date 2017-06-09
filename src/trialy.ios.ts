import { Common } from './trialy.common';

const TRIALY_NOT_SUPPORTED = "Trialy is not supported for iOS.";

export class Trialy extends Common {
    static Initialize(trialy_app_key: string) {
        throw TRIALY_NOT_SUPPORTED;
    }

    static CheckTrial(trial_sku: string, callback: (status: string, timeRemaining: number) => void) {
        throw TRIALY_NOT_SUPPORTED;
    }

    static StartTrial(trial_sku: string, callback: (status: string, timeRemaining: number) => void) {
        throw TRIALY_NOT_SUPPORTED;
    }
}
