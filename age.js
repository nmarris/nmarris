var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter your age"));
     floatDays = floatAge * 365.25;
     intWeeks = floatDays / 7;
     floatMonths = floatAge * 12;
     intFornights = floatDays / 14;
     alert("Age = " + floatAge), ("Days = " + floatDays), ("Weeks = " + intWeeks), ("Months = " + floatMonths), ("Fortnights = " + intFornights);