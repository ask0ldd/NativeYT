export default class TimeService{
    static parseISODuration(isoDuration: string): string {
        return isoDuration.replace('PT', '').replace("M", ":").replace("S", "")
    }
}