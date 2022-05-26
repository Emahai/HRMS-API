const mongoose = require('mongoose');
const config = require('../../config');

mongoose.connect(config.mongo_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

// Get current connected Database
const db = mongoose.connection;

// Notify on error or success
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', () => console.log('Connected to the Database!'));

module.exports = {
  Staffing: require('../v1/Recruitment/StaffingPlan/staffingModel'),
  JobOpening: require('../v1/Recruitment/JobOpening/jobOpeningModel'),
  JobApplication: require('../v1/Recruitment/JobApplication/JobApplicationModel'),
  Branch: require('../v1/Employee/Branch/branchModel'),
  Department: require('../v1/Employee/Department/departmentModel'),
  Designation: require('../v1/Employee/Designation/designationModel'),
  EmployeeList: require('../v1/Employee/EmployeeList/employeeListModel'),
  EmploymentType: require('../v1/Employee/EmploymentType/employmentTypeModel'),
  AttendanceList: require('../v1/Attendance/AttendanceList/attendanceListModel'),
  Holiday: require('../v1/Leave/HolidayList/holidayListModel'),
  LeaveType: require('../v1/Leave/LeaveType/leaveTypeModel'),
  LeavePolicy: require('../v1/Leave/LeavePolicy/leavePolicyModel'),
  LeavePolicyAssignment: require('../v1/Leave/LeavePolicyAssignment/leavePolicyAssignmentModel'),
  CompensatoryLeaveRequest: require('../v1/Leave/CompensatoryLeaveRequest/compensatoryLeaveRequestModel'),
  LeaveLedgerEntry: require('../v1/Leave/LeaveLedgerEntry/leaveLedgerEntryModel'), 
  AttendanceList: require('../v1/Attendance/AttendanceList/attendanceListModel'),
  EmployeeReferral:require('../v1/Recruitment/employeeRefferal/EmployeeReferralModel'),
  JobOffering: require("../v1/Recruitment/jobOffer/JobOfferModel"),
  Appointment:require("../v1/Recruitment/appointment/AppointmentModel"),
  Entry:require('../v1/payroll/payrollEntry/EntryModel'),
  attendanceRequest:require('../v1/Attendance/AttendanceRequest/AttendanceRequestModel'),
  TrainingProgram:require('../v1/Training/TrainingProgram/TrainingProgramModel'),
  TrainingFeedback:require('../v1/Training/TrainingFeedback/TrainingFeedbackModel')
};

