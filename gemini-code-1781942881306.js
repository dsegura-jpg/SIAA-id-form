function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.reEnrolled || "No",
    data.firstName,
    data.middleName,
    data.lastName,
    data.dob,
    data.gender,
    data.phone,
    data.email,
    data.streetBarangay,
    data.city,
    data.zipCode,
    data.country,
    data.studentId || "N/A",
    data.yearLevel,
    data.programCourse,
    data.departmentCollege,
    data.contactName,
    data.contactNumber,
    data.photo,
    data.signature
  ]);
  
  return ContentService.createTextOutput(JSON.stringify({"result":"success"})).setMimeType(ContentService.MimeType.JSON);
}