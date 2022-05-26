var express = require('express');
const staffingRouter = require('./api/v1/Recruitment/StaffingPlan/staffingRouter');
const jobOpeningRouter = require('./api/v1/Recruitment/JobOpening/jobOpeningRouter');
const JobApplicationRouter=require('./api/v1/Recruitment/JobApplication/JobApplicationRouter');
const branchRouter = require('./api/v1/Employee/Branch/branchRouter');
const departmentRouter = require('./api/v1/Employee/Department/departmentRouter');
const designationRouter = require('./api/v1/Employee/Designation/designationRouter');
const employeeListRouter = require('./api/v1/Employee/EmployeeList/employeeListRouter');
const employmentTypeRouter = require('./api/v1/Employee/EmploymentType/employmentTypeRouter');
const attendanceListRouter = require('./api/v1/Attendance/AttendanceList/attendanceListRouter');
const holidayListRouter = require('./api/v1/Leave/HolidayList/holidayListRouter');
const leaveTypeRouter = require('./api/v1/Leave/LeaveType/leaveTypeRouter');
const leavePolicyRouter = require('./api/v1/Leave/LeavePolicy/leavePolicyRouter');
const leavePolicyAssignmentRouter = require('./api/v1/Leave/LeavePolicyAssignment/leavePolicyAssignmentRouter');
const compensatoryLeaveRequestRouter = require('./api/v1/Leave/CompensatoryLeaveRequest/compensatoryLeaveRequestRouter')
const leaveLedgerEntryRouter = require('./api/v1/Leave/LeaveLedgerEntry/leaveLedgerEntryRouter')
const employeeReferralRouter=require('./api/v1/Recruitment/employeeRefferal/EmployeeReferralRouter');
const jobOffer=require('./api/v1/Recruitment/jobOffer/JobOfferRouter');
const appointment=require('./api/v1/Recruitment/appointment/AppointmentrRouter');
const entry=require('./api/v1/payroll/payrollEntry/EntryRouter');
const request=require('./api/v1/Attendance/AttendanceRequest/AttendanceRequestRouter');
const program=require('./api/v1/Training/TrainingProgram/TrainingProgramRouter');
const feedback=require('./api/v1/Training/TrainingFeedback/TrainingFeedbackRouter');

var router = express.Router();

router.use('/staffing', staffingRouter);
router.use('/job-opening', jobOpeningRouter);
router.use('/job-application',JobApplicationRouter);
router.use('/branch', branchRouter);
router.use('/department', departmentRouter);
router.use('/designation', designationRouter);
router.use('/employee-list', employeeListRouter);
router.use('/employment-type', employmentTypeRouter);
router.use('/attendance-list', attendanceListRouter);
router.use('/holiday-list', holidayListRouter);
router.use('/leave-type', leaveTypeRouter);
router.use('/leave-policy', leavePolicyRouter);
router.use('/leave-policy-assignment', leavePolicyAssignmentRouter);
router.use('/compensatory-leave-request', compensatoryLeaveRequestRouter);
router.use('/leave-ledger-entry', leaveLedgerEntryRouter);
router.use('/referral',employeeReferralRouter);
router.use('/job-offering',jobOffer);
router.use('/appointment',appointment);
router.use('/entry',entry);
router.use('/request',request);
router.use('/training-program', program);
router.use('/training-feedback', feedback);


module.exports = router;