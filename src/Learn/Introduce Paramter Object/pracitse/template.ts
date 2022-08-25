/**
 * 要求
 *
 * 展示的代码会查看一组温度读数（reading），检查是否有任何一条读数超出了指定的运作温度范围（range）。
 *
 * 温度读数数据如下：
 */
const station = {
    name: 'ZB1',
    readings: [
        {
            temp: 47,
            time: '2016-11-10 10:10:10',
        },
        {
            temp: 48,
            time: '2016-11-10 10:10:11',
        },
        {
            temp: 49,
            time: '2016-11-10 10:10:12',
        },
        {
            temp: 50,
            time: '2016-11-10 10:10:13',
        },
        {
            temp: 51,
            time: '2016-11-10 10:10:14',
        },
        {
            temp: 52,
            time: '2016-11-10 10:10:15',
        },
    ],
}

// 注意：这里的 min 和 max 由另外一个对象获取
class NumberRange {
    private _min: any
    private _max: any
    constructor(min, max) {
        this._min = min
        this._max = max
    }
    contains(arg) {
        return arg >= this.min && arg <= this.max
    }
    get min(): any {
        return this._min
    }
    set min(value: any) {
        this._min = value
    }
    get max(): any {
        return this._max
    }
    set max(value: any) {
        this._max = value
    }
}
class OperatingPlan {
    private _temperatureCeiling: any
    private _temperatureFloor: any
    constructor(temperatureFloor, temperatureCeiling) {
        this._temperatureFloor = temperatureFloor
        this._temperatureCeiling = temperatureCeiling
    }
    get temperatureCeiling(): any {
        return this._temperatureCeiling
    }
    set temperatureCeiling(value: any) {
        this._temperatureCeiling = value
    }
    get temperatureFloor(): any {
        return this._temperatureFloor
    }
    set temperatureFloor(value: any) {
        this._temperatureFloor = value
    }
}
