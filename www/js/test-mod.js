function Time(dateinfo = []) {
  if (!Array.isArray(dateinfo)) {
    dateinfo = [dateinfo];
  }
  this.date = new Date(...dateinfo);
}

export default Time;
