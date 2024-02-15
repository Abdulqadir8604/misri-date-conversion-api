const Table1Stage1 = {
    0: 8231, 30: 18862, 60: 29493, 90: 40124, 120: 50755, 150: 61386, 180: 72017, 210: 82648,
    240: 93279, 270: 103910, 300: 114541, 330: 125172, 360: 135803, 390: 146434, 420: 157065,
    450: 167696, 480: 178327, 510: 188958, 540: 199589, 570: 210220, 600: 220851, 630: 231482,
    660: 242113, 690: 252744, 720: 263375, 750: 274006, 780: 284637, 810: 295268, 840: 305899,
    870: 316530, 900: 327161, 930: 337792, 960: 348423, 990: 359054, 1020: 369685, 1050: 380316,
    1080: 390947, 1110: 401578, 1140: 412209, 1170: 422840, 1200: 433471, 1230: 444102, 1260: 454733,
    1290: 465364, 1320: 475995, 1350: 486626, 1380: 497257, 1410: 507888, 1440: 518519, 1470: 529150,
    1500: 539781
};

const Table1Stage2 = {
    1: 0, 2: 354, 3: 709, 4: 1063, 5: 1417, 6: 1772, 7: 2126, 8: 2480, 9: 2835, 10: 3189,
    11: 3544, 12: 3898, 13: 4252, 14: 4607, 15: 4961, 16: 5315, 17: 5670, 18: 6024, 19: 6378,
    20: 6733, 21: 7087, 22: 7442, 23: 7796, 24: 8150, 25: 8505, 26: 8859, 27: 9213, 28: 9568,
    29: 9922, 30: 10277
};

const Table1Stage3v1 = {
    "محرم الحرام": 0, "صفر المظفر": 30, "ربيع الأول": 59, "ربيع الآخر": 89,
    "جمادى الأولى": 118, "جمادى الآخرة": 148, "رجب الأصب": 177, "شعبان الكريم": 207,
    "رمضان المعظم": 236, "شوال المكرم": 266, "ذو القعدة الحرام": 295, "ذو الحجة الحرام": 325
};

const Table1Stage3v2 = {
    "Muharram": 0,
    "Safar": 30,
    "Rabiul Awwal": 59,
    "Rabius Sani": 89,
    "Jumadal Awwal": 118,
    "Jumadas Sani": 148,
    "Rajab": 177,
    "Shaban": 207,
    "Ramadan": 236,
    "Shawwal": 266,
    "Dhul Qada": 295,
    "Dhul Hajja": 325
}

const Table2Stage1 = {
    600: 0, 700: 36525, 800: 73050, 900: 109575, 1000: 146100, 1100: 182625,
    1200: 219150, 1300: 255675, 1400: 292200, 1500: 328725, 1582: 358665,
    1600: 365240, 1700: 401764, 1800: 438288, 1900: 474812, 2000: 511337
};

const Table2Stage2 = {
    4: 1461, 8: 2922, 12: 4383, 16: 5844, 20: 7305, 24: 8766, 28: 10227, 32: 11688,
    36: 13149, 40: 14610, 44: 16071, 48: 17532, 52: 18993, 56: 20454, 60: 21915,
    64: 23376, 68: 24837, 72: 26298, 76: 27759, 80: 29220, 84: 30681, 88: 32142,
    92: 33603, 96: 35064
};

const Table2Stage3v1 = {
    '1,0': 0, '1,1': 366, '1,2': 731, '1,3': 1096,
    '2,0': 31, '2,1': 397, '2,2': 762, '2,3': 1127,
    '3,0': 60, '3,1': 425, '3,2': 790, '3,3': 1155,
    '4,0': 91, '4,1': 456, '4,2': 821, '4,3': 1186,
    '5,0': 121, '5,1': 486, '5,2': 851, '5,3': 1216,
    '6,0': 152, '6,1': 517, '6,2': 882, '6,3': 1247,
    '7,0': 182, '7,1': 547, '7,2': 912, '7,3': 1277,
    '8,0': 213, '8,1': 578, '8,2': 943, '8,3': 1308,
    '9,0': 244, '9,1': 609, '9,2': 974, '9,3': 1339,
    '10,0': 274, '10,1': 639, '10,2': 1004, '10,3': 1369,
    '11,0': 305, '11,1': 670, '11,2': 1035, '11,3': 1400,
    '12,0': 335, '12,1': 700, '12,2': 1065, '12,3': 1430
};

const Table2Stage3v2 = {
    "Jan, 0": 0, "Jan, 1": 366, "Jan, 2": 731, "Jan, 3": 1096,
    "Feb, 0": 31, "Feb, 1": 397, "Feb, 2": 762, "Feb, 3": 1127,
    "Mar, 0": 60, "Mar, 1": 425, "Mar, 2": 790, "Mar, 3": 1155,
    "Apr, 0": 91, "Apr, 1": 456, "Apr, 2": 821, "Apr, 3": 1186,
    "May, 0": 121, "May, 1": 486, "May, 2": 851, "May, 3": 1216,
    "June, 0": 152, "June, 1": 517, "June, 2": 882, "June, 3": 1247,
    "July, 0": 182, "July, 1": 547, "July, 2": 912, "July, 3": 1277,
    "Aug, 0": 213, "Aug, 1": 578, "Aug, 2": 943, "Aug, 3": 1308,
    "Sep, 0": 244, "Sep, 1": 609, "Sep, 2": 974, "Sep, 3": 1339,
    "Oct, 0": 274, "Oct, 1": 639, "Oct, 2": 1004, "Oct, 3": 1369,
    "Nov, 0": 305, "Nov, 1": 670, "Nov, 2": 1035, "Nov, 3": 1400,
    "Dec, 0": 335, "Dec, 1": 700, "Dec, 2": 1065, "Dec, 3": 1430
};

const month_number = {
    "Jan": 1, "Feb": 2, "Mar": 3, "Apr": 4, "May": 5, "June": 6, "July": 7, "Aug": 8, "Sep": 9, "Oct": 10, "Nov": 11, "Dec": 12
}

const arabic_month_number = {
    "محرم الحرام": 1, "صفر المظفر": 2, "ربيع الأول": 3, "ربيع الآخر": 4,
    "جمادى الأولى": 5, "جمادى الآخرة": 6, "رجب الأصب": 7, "شعبان الكريم": 8,
    "رمضان المعظم": 9, "شوال المكرم": 10, "ذو القعدة الحرام": 11, "ذو الحجة الحرام": 12
}

const arabic_to_english_month = {
    "محرم الحرام": "Muharram",
    "صفر المظفر": "Safar",
    "ربيع الأول": "Rabiul Awwal",
    "ربيع الآخر": "Rabius Sani",
    "جمادى الأولى": "Jumadal Awwal",
    "جمادى الآخرة": "Jumadas Sani",
    "رجب الأصب": "Rajab",
    "شعبان الكريم": "Shaban",
    "رمضان المعظم": "Ramadan",
    "شوال المكرم": "Shawwal",
    "ذو القعدة الحرام": "Dhul Qada",
    "ذو الحجة الحرام": "Dhul Hajja"
}


const getCurrentDate = () => {
    const currentDate = new Date();
    const day = currentDate.getDate().toString().padStart(2, '0');
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
    const year = currentDate.getFullYear();
    return `${day}-${month}-${year}`;
}

const enToArabic = {
    1: '١', 2: '٢', 3: '٣', 4: '٤', 5: '٥', 6: '٦', 7: '٧', 8: '٨', 9: '٩', 0: '٠'
}

const convertToArabicDigits = (input) => {
    let result = '';
    let ignoreLeadingZero = true;

    for (const char of input) {
        if (char.match(/\d/)) {
            if (char !== '0') {
                ignoreLeadingZero = false;
                const arabicDigit = enToArabic[parseInt(char)];
                result += arabicDigit;
            } else if (!ignoreLeadingZero) {
                result += enToArabic[parseInt(char)];
            }
        } else {
            result += char;
            ignoreLeadingZero = false;
        }
    }

    return result;
}

module.exports = {
    GregToMisri: function (day, month, year) {
        const gregDate = `${day}-${month}-${year}`;
        const gCentury = parseInt(gregDate.substring(6, 8)) * 100;
        const ordinalCorrespondingCentury = Table2Stage1[gCentury];

        const gCenturyYear = parseInt(gregDate.substring(8, 10));
        const nearestLowerKeyForGCentury = Math.max(...Object.keys(Table2Stage2).filter(key => key <= gCenturyYear));
        const ordinalCorrespondingGCenturyYear = Table2Stage2[nearestLowerKeyForGCentury];

        const gMonth = parseInt(gregDate.substring(3, 5));
        const differenceInYear = gCenturyYear - nearestLowerKeyForGCentury;
        const ordinalCorrespondingDifferenceInYear = Table2Stage3v1[`${gMonth},${differenceInYear}`];

        const gDay = parseInt(gregDate.substring(0, 2));

        const ordinalDate = ordinalCorrespondingCentury + ordinalCorrespondingGCenturyYear + ordinalCorrespondingDifferenceInYear + gDay;

        const nearestLowerKeyForOrdinalDate = Math.max(...Object.values(Table1Stage1).filter(value => value <= ordinalDate));
        const mCentury = Object.entries(Table1Stage1).find(([key, value]) => value === nearestLowerKeyForOrdinalDate);

        const mYearOrdinalDifference = ordinalDate - nearestLowerKeyForOrdinalDate;
        const nearestLowerKeyForMYear = Math.max(...Object.values(Table1Stage2).filter(value => value <= mYearOrdinalDifference));
        const mCenturyYear = Object.entries(Table1Stage2).find(([key, value]) => value === nearestLowerKeyForMYear);
        const mYear = parseInt(mCentury[0]) + parseInt(mCenturyYear[0]);

        const mMonthOrdinalDifference = mYearOrdinalDifference - nearestLowerKeyForMYear;
        const nearestLowerKeyForMMonth = Math.max(...Object.values(Table1Stage3v1).filter(value => value <= mMonthOrdinalDifference));
        const mMonth = Object.keys(Table1Stage3v1).find(key => Table1Stage3v1[key] === nearestLowerKeyForMMonth);

        const mDay = mMonthOrdinalDifference - nearestLowerKeyForMMonth;

        const monthNumber = arabic_month_number[mMonth];

        // Convert values to Arabic digits
        const convertedValues = {
            misDay: mDay.toString(),
            misMonth: arabic_to_english_month[mMonth],
            misYear: mYear.toString(),
            arabic_misDay: convertToArabicDigits(mDay.toString()),
            arabic_misMonth: convertToArabicDigits(mMonth),
            arabic_misYear: convertToArabicDigits(mYear.toString()),
            misMonthNumber: monthNumber.toString(),
            arabic_monthNumber: convertToArabicDigits(monthNumber.toString())
        };

        return {
            misriDatev1: `${convertToArabicDigits(mDay.toString())} ${mMonth} ${convertToArabicDigits(mYear.toString())}`,
            misriDatev2: `${mDay}-${monthNumber}-${mYear}`,
            gregDate: gregDate,
            ...convertedValues
        };
    },

    MisriToGreg: function (day, month, year) {
        const misriDate = `${day}-${month}-${year}`;
        const mDateParts = misriDate.split("-")
        const mDay = parseInt(mDateParts[0])
        const mMonth = Object.entries(arabic_to_english_month).find(([key, value]) => key === Object.entries(arabic_month_number).find(([key, value]) => value === parseInt(mDateParts[1]))[0])[1]
        const mYear = parseInt(mDateParts[2])

        // Misri date
        const nearestLowerKeyForMCentury = Math.max(...Object.keys(Table1Stage1).filter(key => key <= mYear));
        const ordinalCorrespondingMCenturyYear = Table1Stage1[nearestLowerKeyForMCentury];

        const yearDifference = mYear - nearestLowerKeyForMCentury;
        const ordinalForYearDifference = Table1Stage2[yearDifference];

        const ordinalForMonth = Table1Stage3v2[mMonth];

        const totalOrdinal = ordinalCorrespondingMCenturyYear + ordinalForYearDifference + ordinalForMonth + mDay;

        // Gregorian date
        const nearestLowerKeyForOrdinalDate = Math.max(...Object.values(Table2Stage1).filter(value => value <= totalOrdinal));
        const gregYearForNearestOrdinalEntry = Object.entries(Table2Stage1).find(([key, value]) => value === nearestLowerKeyForOrdinalDate);
        const gregYearForNearestOrdinal = gregYearForNearestOrdinalEntry[0];

        const ordinalDifference = totalOrdinal - nearestLowerKeyForOrdinalDate;
        const nearestLowerKeyForGYear = Math.max(...Object.values(Table2Stage2).filter(value => value <= ordinalDifference));
        const gregYearForOrdinalDifferenceEntry = Object.entries(Table2Stage2).find(([key, value]) => value === nearestLowerKeyForGYear);
        const gregYearForOrdinalDifference = gregYearForOrdinalDifferenceEntry[0];

        const remainingDays = ordinalDifference - nearestLowerKeyForGYear;
        const nearestLowerKeyForGMonth = Math.max(...Object.values(Table2Stage3v2).filter(value => value <= remainingDays));
        const gregMonthDayForRemainingDaysEntry = Object.entries(Table2Stage3v2).find(([key, value]) => value === nearestLowerKeyForGMonth);
        const gregMonthDayForRemainingDays = gregMonthDayForRemainingDaysEntry[0];

        const gregYear = parseInt(gregYearForNearestOrdinal) + parseInt(gregYearForOrdinalDifference);
        const gregMonth = gregMonthDayForRemainingDays.split(',')[0];
        const gregDay = remainingDays - nearestLowerKeyForGMonth;

        const monthNumber = month_number[gregMonth];
        const gregorianDatev1 = `${gregDay}-${monthNumber}-${gregYear}`;
        const gregorianDatev2 = `${gregDay}-${gregMonth}-${gregYear}`;
        const arabic_misriDate = convertToArabicDigits(mDay.toString()) + " " + Object.entries(
            arabic_to_english_month).find(([key, value]) => value === mMonth)[0] + " " + convertToArabicDigits(mYear.toString());

        const returnValues = {
            gregorianDatev1: `${gregDay}-${monthNumber}-${gregYear}`,
            gregorianDatev2: `${gregDay}-${gregMonth}-${gregYear}`,
            gregYear: gregYear.toString(),
            gregMonth: gregMonth,
            gregDay: gregDay.toString(),
            monthNumber: monthNumber.toString(),
        };

        return {
            misriDate: misriDate,
            arabic_misriDate: arabic_misriDate,
            gregorianDatev1: `${gregDay}-${monthNumber}-${gregYear}`,
            gregorianDatev2: `${gregDay}-${gregMonth}-${gregYear}`,
            ...returnValues
        };

    }
};

// "Muharram"
//"Safar"
//"Rabiul Awwal"
//"Rabius Sani"
//"Jumadal Awwal"
//"Jumadas Sani"
//"Rajab"
//"Shaban"
//"Ramadan"
//"Shawwal"
//"Dhul Qada"
//"Dhul Hajja"

const gregDate = "01-01-2021";
const dateParts = gregDate.split("-")
const day = dateParts[0].padStart(2, '0')
const month = dateParts[1].padStart(2, '0')
const year = dateParts[2]
const mDate = module.exports.GregToMisri(day, month, year);
console.log(mDate);