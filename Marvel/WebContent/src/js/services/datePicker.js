angular
.module('Chat')
.service('DatePicker',function () {
  return {
    date: new Date(),
    opened:false,
    today:function() {
      return date = new Date();
    },
    clear:function() {
      this.date = null;
    },
    open:function() {
      this.opened = true;
    }
  };
});
