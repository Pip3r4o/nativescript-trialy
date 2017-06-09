export declare class Common {
    static Initialize(trialy_app_key: string): void;
    static CheckTrial(trial_sku: string, callback: (status: string, timeRemaining: number) => void): void;
    static StartTrial(trial_sku: string, callback: (status: string, timeRemaining: number) => void): void;
    static STATUS_TRIAL_JUST_STARTED: string;
    static STATUS_TRIAL_JUST_ENDED: string;
    static STATUS_TRIAL_NOT_YET_STARTED: string;
    static STATUS_TRIAL_RUNNING: string;
    static STATUS_TRIAL_OVER: string;
}
