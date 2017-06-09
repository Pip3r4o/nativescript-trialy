export class Common {
  static Initialize(trialy_app_key: string) { }
  static CheckTrial(trial_sku: string, callback: (status: string, timeRemaining: number) => void) { }
  static StartTrial(trial_sku: string, callback: (status: string, timeRemaining: number) => void) { }

  static STATUS_TRIAL_JUST_STARTED = "JUST_STARTED";
  static STATUS_TRIAL_JUST_ENDED = "JUST_ENDED";
  static STATUS_TRIAL_NOT_YET_STARTED = "NOT_YET_STARTED";
  static STATUS_TRIAL_RUNNING = "RUNNING";
  static STATUS_TRIAL_OVER = "OVER";
  static ERROR_TRIAL_SKU_NOT_FOUND = "TRIAL_SKU_NOT_FOUND";
  static ERROR_APP_NOT_FOUND = "APP_NOT_FOUND";
  static ERROR_CONTACTING_SERVER = "CONTACTING_SERVER";
}
