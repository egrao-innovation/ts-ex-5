export class Clock {
  minutes: number;
  constructor(hour: number, minute: number = 0) {
    this.minutes= (hour*60) + minute;
  }

  public toString(): unknown {
    var hours: number = (this.minutes / 60);
    var finalHours: number = Math.floor(hours);
    var finalMinutes: number = Math.round((hours - finalHours) * 60);

    finalHours = (finalHours < 0) ? (24-(finalHours*-1)%24) : finalHours;
    finalHours = (finalHours > 23) ? (0+(finalHours%24)) : finalHours;
    if (finalHours < 10 && finalMinutes < 10) {
      var hourString: string ="0"+finalHours.toString();
      var minuteString: string = "0"+finalMinutes.toString();
      return hourString+':'+minuteString;
    }
    else if (finalHours < 10) {
      var hourString: string ="0"+finalHours.toString();
      return hourString+':'+finalMinutes.toString();
    }
    else if (finalMinutes < 10) {
      var minuteString: string = "0"+finalMinutes.toString();
      return finalHours.toString()+':'+minuteString;
    }
    return finalHours.toString()+':'+finalMinutes.toString();
  }
  public plus(plusMinutes: number): Clock {
    this.minutes+=plusMinutes;
    return this;
  }
  public minus(minusMinutes: number): Clock {
    this.minutes-=minusMinutes;
    return this;
  }
  public equals(other: Clock): unknown {
    return (this.toString()===other.toString()) ? true : false;
  }
}