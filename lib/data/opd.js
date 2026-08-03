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
  'Physician',
  'Chest Physician',
  'Neuro Physician',
  'Paediatric Neuro Physician',
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
 *  - If a specific short day is passed (e.g. "Wed") → returns that day's timing, or "".
 *  - If every consulting day shares the same time → returns that one string.
 *  - If timings differ across days → groups days by timing:
 *      "Mon, Wed 10:00 AM \u2013 11:00 AM \u00B7 Fri 05:00 PM \u2013 06:00 PM"
 *  - If the doctor has no schedule → returns "".
 */
export const formatTiming = (doc, day) => {
  if (!doc?.schedule) return '';

  // Specific day requested → return just that day's timing.
  if (day && day !== 'all') {
    return doc.schedule[DAY_FULL[day]] || '';
  }

  // Group short-day codes by their timing string (preserves Mon\u2192Sat order).
  const groups = new Map();
  for (const short of DAYS) {
    const t = doc.schedule[DAY_FULL[short]];
    if (!t) continue;
    if (!groups.has(t)) groups.set(t, []);
    groups.get(t).push(short);
  }

  if (groups.size === 0) return '';
  if (groups.size === 1) return Array.from(groups.keys())[0];

  return Array.from(groups.entries())
    .map(([t, days]) => `${days.join(', ')} ${t}`)
    .join(' \u00B7 ');
};

// ---------------------------------------------------------------------------
// Real hospital consultants — Physician department (first batch).
// Additional departments will be added incrementally as the hospital shares data.
// Note: qualifications are intentionally left blank (null) for now; they'll be
// filled in later. When every doctor's qualification is null, the OPD Schedule
// page automatically hides the Qualification column.
// ---------------------------------------------------------------------------
export const DOCTORS = [
  {
    id: 1,
    name: 'Dr. Deepak B. Varade',
    department: 'Physician',
    qualification: null,
    schedule: {
      Monday: null,
      Tuesday: '9:00 AM',
      Wednesday: null,
      Thursday: '9:00 AM',
      Friday: null,
      Saturday: '9:00 AM',
    },
  },
  {
    id: 2,
    name: 'Dr. Vishal M. Chaudhari',
    department: 'Physician',
    qualification: null,
    schedule: {
      Monday: '3:00 PM',
      Tuesday: null,
      Wednesday: null,
      Thursday: '3:00 PM',
      Friday: null,
      Saturday: null,
    },
  },
  {
    id: 3,
    name: 'Dr. B. M. Karwa',
    department: 'Physician',
    qualification: null,
    schedule: {
      Monday: null,
      Tuesday: '2:30 PM',
      Wednesday: '2:30 PM',
      Thursday: null,
      Friday: null,
      Saturday: '2:30 PM',
    },
  },
  {
    id: 4,
    name: 'Dr. Amit Dhamankar',
    department: 'Physician',
    qualification: null,
    schedule: {
      Monday: '9:00 AM',
      Tuesday: null,
      Wednesday: '9:00 AM',
      Thursday: null,
      Friday: '9:00 AM',
      Saturday: null,
    },
  },
  {
    id: 5,
    name: 'Dr. Amrish Nanda',
    department: 'Physician',
    qualification: null,
    schedule: {
      Monday: '10:00 AM',
      Tuesday: null,
      Wednesday: '10:00 AM',
      Thursday: null,
      Friday: '10:00 AM',
      Saturday: null,
    },
  },
  {
    id: 6,
    name: 'Dr. Anuj Gandhi',
    department: 'Chest Physician',
    qualification: null,
    schedule: {
      Monday: null,
      Tuesday: '11:00 AM',
      Wednesday: null,
      Thursday: null,
      Friday: '11:00 AM',
      Saturday: null,
    },
  },
  {
    id: 7,
    name: 'Dr. Hareshkumar Bharote',
    department: 'Neuro Physician',
    qualification: null,
    schedule: {
      Monday: null,
      Tuesday: null,
      Wednesday: null,
      Thursday: null,
      Friday: '2:30 PM',
      Saturday: null,
    },
  },
  {
    id: 8,
    name: 'Dr. Nandkumar P. Kene',
    department: 'Paediatric Neuro Physician',
    qualification: null,
    schedule: {
      Monday: null,
      Tuesday: null,
      Wednesday: null,
      Thursday: null,
      Friday: '5:30 PM',
      Saturday: null,
    },
  },
];
