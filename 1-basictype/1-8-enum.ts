{
  /**
   * Enum
   */
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 30;

  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({
    "MONDAY": 0,
    "TUESDAY": 1,
    "WEDNESDAY": 2
  })

  const daysOfToday = DAYS_ENUM.MONDAY

  // Typescript
  enum DAYS {
    Monday, // 0 이 아닌 다른 숫자나 문자열 할당 가능
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  console.log(DAYS.Friday)

  // Typescript 에서 enum 을 쓰면 안되는 이유
  let day: DAYS = DAYS.Saturday
  day = 10; // 이래서 쓰면 안된다...

  // 대신 안전한 type 을 쓰면 아무 문제 없다
  // 타입스크립트에서는 enum 을 type 으로 완벽히 대체가능하다.
  type Days = typeof MONDAY | typeof TUESDAY | typeof WEDNESDAY

  // 다만 다른 모바일 클라이언트(Android, iOS) 에서는 문자열의 유니언 타입을 설명할 수 없기 때문에 enum 을 사용하긴 한다.
}
