// Placeholder doctors list — to be replaced with real data later
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

export const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const DAY_FULL = { Mon: 'Monday', Tue: 'Tuesday', Wed: 'Wednesday', Thu: 'Thursday', Fri: 'Friday', Sat: 'Saturday' };

// day flags = which weekdays doctor is available
export const DOCTORS = [
  { name: 'Dr. Rajesh Deshmukh', department: 'General Medicine', qualification: 'MBBS, MD (Medicine)', days: { Mon: true, Tue: true, Wed: true, Thu: true, Fri: true, Sat: true }, timing: '10:00 AM \u2013 01:00 PM', room: '101' },
  { name: 'Dr. Sunita Kulkarni', department: 'Gynaecology & Obstetrics', qualification: 'MBBS, MS (OBGY)', days: { Mon: true, Tue: false, Wed: true, Thu: false, Fri: true, Sat: true }, timing: '11:00 AM \u2013 02:00 PM', room: '204' },
  { name: 'Dr. Anil Joshi', department: 'Orthopaedics', qualification: 'MBBS, MS (Ortho), D\u2019Ortho', days: { Mon: true, Tue: true, Wed: false, Thu: true, Fri: false, Sat: true }, timing: '05:00 PM \u2013 08:00 PM', room: '112' },
  { name: 'Dr. Neha Patil', department: 'Paediatrics', qualification: 'MBBS, DCH, MD (Paed)', days: { Mon: true, Tue: true, Wed: true, Thu: true, Fri: true, Sat: false }, timing: '09:30 AM \u2013 12:30 PM', room: '108' },
  { name: 'Dr. Vikram Sawant', department: 'General Surgery', qualification: 'MBBS, MS (Gen Surg)', days: { Mon: false, Tue: true, Wed: true, Thu: false, Fri: true, Sat: true }, timing: '06:00 PM \u2013 08:00 PM', room: '210' },
  { name: 'Dr. Prakash Nair', department: 'Cardiology', qualification: 'MBBS, MD, DM (Cardio)', days: { Mon: false, Tue: false, Wed: true, Thu: false, Fri: false, Sat: true }, timing: '05:30 PM \u2013 07:30 PM', room: '306' },
  { name: 'Dr. Meera Iyer', department: 'ENT', qualification: 'MBBS, MS (ENT)', days: { Mon: true, Tue: false, Wed: true, Thu: false, Fri: true, Sat: false }, timing: '04:00 PM \u2013 06:00 PM', room: '115' },
  { name: 'Dr. Ashok Bhagat', department: 'Ophthalmology', qualification: 'MBBS, MS (Ophthal)', days: { Mon: true, Tue: true, Wed: false, Thu: true, Fri: false, Sat: true }, timing: '10:30 AM \u2013 12:30 PM', room: '118' },
  { name: 'Dr. Kavita Rane', department: 'Dermatology', qualification: 'MBBS, MD (Derm)', days: { Mon: false, Tue: true, Wed: false, Thu: true, Fri: false, Sat: true }, timing: '02:00 PM \u2013 04:00 PM', room: '121' },
  { name: 'Dr. Rohit Shah', department: 'Dental', qualification: 'BDS, MDS', days: { Mon: true, Tue: true, Wed: true, Thu: true, Fri: true, Sat: true }, timing: '11:00 AM \u2013 07:00 PM', room: '124' },
  { name: 'Dr. Priya Menon', department: 'Physiotherapy', qualification: 'BPT, MPT', days: { Mon: true, Tue: true, Wed: true, Thu: true, Fri: true, Sat: true }, timing: '10:00 AM \u2013 06:00 PM', room: '130' },
  { name: 'Dr. Sameer Kadam', department: 'Urology', qualification: 'MBBS, MS, MCh (Uro)', days: { Mon: false, Tue: true, Wed: false, Thu: false, Fri: true, Sat: false }, timing: '06:30 PM \u2013 08:00 PM', room: '312' },
  { name: 'Dr. Anita Bhosale', department: 'Psychiatry', qualification: 'MBBS, MD (Psychiatry)', days: { Mon: true, Tue: false, Wed: false, Thu: true, Fri: false, Sat: false }, timing: '04:00 PM \u2013 06:00 PM', room: '218' },
  { name: 'Dr. Yogesh Pawar', department: 'Radiology', qualification: 'MBBS, MD (Radio)', days: { Mon: true, Tue: true, Wed: true, Thu: true, Fri: true, Sat: true }, timing: '09:00 AM \u2013 05:00 PM', room: 'B\u201102' },
  { name: 'Dr. Snehal Gokhale', department: 'Pathology', qualification: 'MBBS, MD (Path)', days: { Mon: true, Tue: true, Wed: true, Thu: true, Fri: true, Sat: true }, timing: '08:30 AM \u2013 05:00 PM', room: 'B\u201105' },
  { name: 'Dr. Manish Gupta', department: 'General Medicine', qualification: 'MBBS, MD (Medicine)', days: { Mon: false, Tue: true, Wed: false, Thu: true, Fri: false, Sat: true }, timing: '05:00 PM \u2013 07:00 PM', room: '103' },
  { name: 'Dr. Reshma Salvi', department: 'Gynaecology & Obstetrics', qualification: 'MBBS, DGO', days: { Mon: true, Tue: false, Wed: true, Thu: false, Fri: true, Sat: false }, timing: '05:00 PM \u2013 07:00 PM', room: '206' },
  { name: 'Dr. Nitin Chavan', department: 'Orthopaedics', qualification: 'MBBS, D\u2019Ortho', days: { Mon: false, Tue: true, Wed: false, Thu: false, Fri: true, Sat: true }, timing: '10:00 AM \u2013 12:00 PM', room: '114' },
];
