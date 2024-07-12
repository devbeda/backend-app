class ApiResponse {
  constructor(statuCode, data, massage = "Success") {
    this.statuCode = statuCode;
    this.data = data;
    this.massage = massage;
    this.success = statuCode < 400;
  }
}

export { ApiResponse };
