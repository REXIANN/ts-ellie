{
    /**
     * Enum
     */
    var MAX_NUM = 6;
    var MAX_STUDENTS_PER_CLASS = 30;
    var MONDAY = 0;
    var TUESDAY = 1;
    var WEDNESDAY = 2;
    var DAYS_ENUM = Object.freeze({
        "MONDAY": 0,
        "TUESDAY": 1,
        "WEDNESDAY": 2
    });
    var daysOfToday = DAYS_ENUM.MONDAY;
    // Typescript
    var DAYS = void 0;
    (function (DAYS) {
        DAYS[DAYS["Monday"] = 0] = "Monday";
        DAYS[DAYS["Tuesday"] = 1] = "Tuesday";
        DAYS[DAYS["Wednesday"] = 2] = "Wednesday";
        DAYS[DAYS["Thursday"] = 3] = "Thursday";
        DAYS[DAYS["Friday"] = 4] = "Friday";
        DAYS[DAYS["Saturday"] = 5] = "Saturday";
        DAYS[DAYS["Sunday"] = 6] = "Sunday";
    })(DAYS || (DAYS = {}));
    console.log(DAYS.Friday);
    // Typescript 에서 enum 을 쓰면 안되는 이유
    var day = DAYS.Saturday;
    day = 10; // 이래서 쓰면 안된다...
}
