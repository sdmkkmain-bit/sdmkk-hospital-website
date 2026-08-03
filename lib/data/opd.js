// OPD Consultants — editable data source for the OPD Schedule page.
//
// PER-DOCTOR SHAPE:
// {
//   id: 1,                                    // unique numeric id
//   name: "Dr. ABC",                          // full name
//   department: "General Medicine",           // must exist in DEPARTMENTS below (add if new)
//   qualification: "MBBS, MD",                // degrees
//   schedule: {                               // day-wise timings; use null when not available
//     Monday:    "10:00 AM – 01:00 PM",
//     Tuesday:   null,
//     Wednesday: "10:00 AM – 01:00 PM",
//     Thursday:  null,
//     Friday:    "05:00 PM – 07:00 PM",
//     Saturday:  null
//   }
// }
//
// The UI derives availability (check / minus) from schedule[day] != null and
// shows the unique non-null timings in the Timing column automatically.

export const DEPARTMENTS = [
  'General Medicine',
  'General Surgery',
  'Orthopaedics',
  'Paediatrics',
  'Gynaecology & Obstetrics',
  'Cardiology',
  'ENT',
  'Ophthalmology',
  'Dermatology',
  'Dental',
  'Physiotherapy',
  'Pathology',
  'Radiology',
  'Psychiatry',
  'Urology',
];

// Short codes used by the UI column headers.
export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

// Short → full day name mapping (schedule keys use full names).
export const DAY_FULL = {
  Mon: 'Monday',
  Tue: 'Tuesday',
  Wed: 'Wednesday',
  Thu: 'Thursday',
  Fri: 'Friday',
  Sat: 'Saturday',
};

/** True if the doctor consults on the given short day code (e.g. "Mon"). */
export const isAvailable = (doc, shortDay) =>
  Boolean(doc?.schedule?.[DAY_FULL[shortDay]]);

/** Compact display of a doctor's timings across all days.
 *  - If every consulting day has the same time → returns that one string.
 *  - If timings differ across days → returns unique values joined by " · ".
 *  - If the doctor has no schedule → returns "".
 */
export const formatTiming = (doc) => {
  if (!doc?.schedule) return '';
  const times = Object.values(doc.schedule).filter(Boolean);
  if (times.length === 0) return '';
  const unique = Array.from(new Set(times));
  return unique.join(' \u00B7 ');
};

// ---------------------------------------------------------------------------
// Sample doctors (to be replaced with real hospital data).
// Keep the schedule shape identical for every entry.
// ---------------------------------------------------------------------------
export const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Rajesh Deshmukh',
    department: 'General Medicine',
    qualification: 'MBBS, MD (Medicine)',
    schedule: {
      Monday: '10:00 AM \u2013 01:00 PM',
      Tuesday: '10:00 AM \u2013 01:00 PM',
      Wednesday: '10:00 AM \u2013 01:00 PM',
      Thursday: '10:00 AM \u2013 01:00 PM',
      Friday: '10:00 AM \u2013 01:00 PM',
      Saturday: '10:00 AM \u2013 01:00 PM',
    },
  },
  {
    id: 2,
    name: 'Dr. Sunita Kulkarni',
    department: 'Gynaecology & Obstetrics',
    qualification: 'MBBS, MS (OBGY)',
    schedule: {
      Monday: '11:00 AM \u2013 02:00 PM',
      Tuesday: null,
      Wednesday: '11:00 AM \u2013 02:00 PM',
      Thursday: null,
      Friday: '11:00 AM \u2013 02:00 PM',
      Saturday: '11:00 AM \u2013 02:00 PM',
    },
  },
  {
    id: 3,
    name: 'Dr. Anil Joshi',
    department: 'Orthopaedics',
    qualification: 'MBBS, MS (Ortho), D\u2019Ortho',
    schedule: {
      Monday: '05:00 PM \u2013 08:00 PM',
      Tuesday: '05:00 PM \u2013 08:00 PM',
      Wednesday: null,
      Thursday: '05:00 PM \u2013 08:00 PM',
      Friday: null,
      Saturday: '05:00 PM \u2013 08:00 PM',
    },
  },
  {
    id: 4,
    name: 'Dr. Neha Patil',
    department: 'Paediatrics',
    qualification: 'MBBS, DCH, MD (Paed)',
    schedule: {
      Monday: '09:30 AM \u2013 12:30 PM',
      Tuesday: '09:30 AM \u2013 12:30 PM',
      Wednesday: '09:30 AM \u2013 12:30 PM',
      Thursday: '09:30 AM \u2013 12:30 PM',
      Friday: '09:30 AM \u2013 12:30 PM',
      Saturday: null,
    },
  },
  {
    id: 5,
    name: 'Dr. Vikram Sawant',
    department: 'General Surgery',
    qualification: 'MBBS, MS (Gen Surg)',
    schedule: {
      Monday: null,
      Tuesday: '06:00 PM \u2013 08:00 PM',
      Wednesday: '06:00 PM \u2013 08:00 PM',
      Thursday: null,
      Friday: '06:00 PM \u2013 08:00 PM',
      Saturday: '06:00 PM \u2013 08:00 PM',
    },
  },
  {
    id: 6,
    name: 'Dr. Prakash Nair',
    department: 'Cardiology',
    qualification: 'MBBS, MD, DM (Cardio)',
    schedule: {
      Monday: null,
      Tuesday: null,
      Wednesday: '05:30 PM \u2013 07:30 PM',
      Thursday: null,
      Friday: null,
      Saturday: '05:30 PM \u2013 07:30 PM',
    },
  },
  {
    id: 7,
    name: 'Dr. Meera Iyer',
    department: 'ENT',
    qualification: 'MBBS, MS (ENT)',
    schedule: {
      Monday: '04:00 PM \u2013 06:00 PM',
      Tuesday: null,
      Wednesday: '04:00 PM \u2013 06:00 PM',
      Thursday: null,
      Friday: '04:00 PM \u2013 06:00 PM',
      Saturday: null,
    },
  },
  {
    id: 8,
    name: 'Dr. Ashok Bhagat',
    department: 'Ophthalmology',
    qualification: 'MBBS, MS (Ophthal)',
    schedule: {
      Monday: '10:30 AM \u2013 12:30 PM',
      Tuesday: '10:30 AM \u2013 12:30 PM',
      Wednesday: null,
      Thursday: '10:30 AM \u2013 12:30 PM',
      Friday: null,
      Saturday: '10:30 AM \u2013 12:30 PM',
    },
  },
  {
    id: 9,
    name: 'Dr. Kavita Rane',
    department: 'Dermatology',
    qualification: 'MBBS, MD (Derm)',
    schedule: {
      Monday: null,
      Tuesday: '02:00 PM \u2013 04:00 PM',
      Wednesday: null,
      Thursday: '02:00 PM \u2013 04:00 PM',
      Friday: null,
      Saturday: '02:00 PM \u2013 04:00 PM',
    },
  },
  {
    id: 10,
    name: 'Dr. Rohit Shah',
    department: 'Dental',
    qualification: 'BDS, MDS',
    schedule: {
      Monday: '11:00 AM \u2013 07:00 PM',
      Tuesday: '11:00 AM \u2013 07:00 PM',
      Wednesday: '11:00 AM \u2013 07:00 PM',
      Thursday: '11:00 AM \u2013 07:00 PM',
      Friday: '11:00 AM \u2013 07:00 PM',
      Saturday: '11:00 AM \u2013 07:00 PM',
    },
  },
  {
    id: 11,
    name: 'Dr. Priya Menon',
    department: 'Physiotherapy',
    qualification: 'BPT, MPT',
    schedule: {
      Monday: '10:00 AM \u2013 06:00 PM',
      Tuesday: '10:00 AM \u2013 06:00 PM',
      Wednesday: '10:00 AM \u2013 06:00 PM',
      Thursday: '10:00 AM \u2013 06:00 PM',
      Friday: '10:00 AM \u2013 06:00 PM',
      Saturday: '10:00 AM \u2013 06:00 PM',
    },
  },
  {
    id: 12,
    name: 'Dr. Sameer Kadam',
    department: 'Urology',
    qualification: 'MBBS, MS, MCh (Uro)',
    schedule: {
      Monday: null,
      Tuesday: '06:30 PM \u2013 08:00 PM',
      Wednesday: null,
      Thursday: null,
      Friday: '06:30 PM \u2013 08:00 PM',
      Saturday: null,
    },
  },
  {
    id: 13,
    name: 'Dr. Anita Bhosale',
    department: 'Psychiatry',
    qualification: 'MBBS, MD (Psychiatry)',
    schedule: {
      Monday: '04:00 PM \u2013 06:00 PM',
      Tuesday: null,
      Wednesday: null,
      Thursday: '04:00 PM \u2013 06:00 PM',
      Friday: null,
      Saturday: null,
    },
  },
  {
    id: 14,
    name: 'Dr. Yogesh Pawar',
    department: 'Radiology',
    qualification: 'MBBS, MD (Radio)',
    schedule: {
      Monday: '09:00 AM \u2013 05:00 PM',
      Tuesday: '09:00 AM \u2013 05:00 PM',
      Wednesday: '09:00 AM \u2013 05:00 PM',
      Thursday: '09:00 AM \u2013 05:00 PM',
      Friday: '09:00 AM \u2013 05:00 PM',
      Saturday: '09:00 AM \u2013 05:00 PM',
    },
  },
  {
    id: 15,
    name: 'Dr. Snehal Gokhale',
    department: 'Pathology',
    qualification: 'MBBS, MD (Path)',
    schedule: {
      Monday: '08:30 AM \u2013 05:00 PM',
      Tuesday: '08:30 AM \u2013 05:00 PM',
      Wednesday: '08:30 AM \u2013 05:00 PM',
      Thursday: '08:30 AM \u2013 05:00 PM',
      Friday: '08:30 AM \u2013 05:00 PM',
      Saturday: '08:30 AM \u2013 05:00 PM',
    },
  },
  {
    id: 16,
    name: 'Dr. Manish Gupta',
    department: 'General Medicine',
    qualification: 'MBBS, MD (Medicine)',
    schedule: {
      Monday: null,
      Tuesday: '05:00 PM \u2013 07:00 PM',
      Wednesday: null,
      Thursday: '05:00 PM \u2013 07:00 PM',
      Friday: null,
      Saturday: '05:00 PM \u2013 07:00 PM',
    },
  },
  {
    id: 17,
    name: 'Dr. Reshma Salvi',
    department: 'Gynaecology & Obstetrics',
    qualification: 'MBBS, DGO',
    schedule: {
      Monday: '05:00 PM \u2013 07:00 PM',
      Tuesday: null,
      Wednesday: '05:00 PM \u2013 07:00 PM',
      Thursday: null,
      Friday: '05:00 PM \u2013 07:00 PM',
      Saturday: null,
    },
  },
  {
    id: 18,
    name: 'Dr. Nitin Chavan',
    department: 'Orthopaedics',
    qualification: 'MBBS, D\u2019Ortho',
    schedule: {
      Monday: null,
      Tuesday: '10:00 AM \u2013 12:00 PM',
      Wednesday: null,
      Thursday: null,
      Friday: '10:00 AM \u2013 12:00 PM',
      Saturday: '10:00 AM \u2013 12:00 PM',
    },
  },
];
