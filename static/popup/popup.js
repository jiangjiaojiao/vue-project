/**
 * Created by luoyifei on 2018/1/19.
 */
exports.install = function (Vue, options) {
  function each(arr, cb) {
    for (var i = 0, len = arr.length; i < len; i++) {
      cb(arr[i], i);
    }
  }

  // 控制执行流程
  var popupDefault = false;

  var Popup = function (opt) {
    this.close = function () {

    }

    this.stop = function () {
      popupDefault = true
    }

    this.gone = function () {
      popupDefault = false
    }
  }

  // 最简单的tip， 2秒隐藏
  Popup.prototype.showTip = function (text, duration) {
    // 如果没有传入duration，则默认两秒消失
    if (duration == "" || duration == null) {
      duration = 2000;
    }
    // 如果没有传入text，则默认提示 "加载中..."
    if (text == "" || text == null) {
      text = "加载中...";
    }
    var ele = document.createElement("div");
    ele.className = 'tips';
    ele.innerHTML = '<div class="center-block bg"><p>' + text + '</p></div>';
    document.body.appendChild(ele);
    setTimeout(function () {
      document.body.removeChild(ele);
    }, duration);
  };

  // 显示loading
  Popup.prototype.showLoading = function (text) {
    // 如果没有传入text，则默认提示 "加载中..."
    if (text == "" || text == null) {
      text = "加载中...";
    }
    var loadingImg = require('./assets/img/loading.gif');
    var ele = document.createElement("div");
    ele.className = "loading";
    ele.innerHTML = '<div class="center-block bg"><img src="' + loadingImg + '"><p>' + text + '</p></div>';
    document.body.appendChild(ele);
  };

  // 隐藏loading
  Popup.prototype.hideLoading = function () {
    var popupLoading = document.getElementsByClassName("loading");
    if (popupLoading && popupLoading.length > 0) {
      each(popupLoading, function (item) {
        document.body.removeChild(item);
      })
    }
  };
  // 状态提醒
  Popup.prototype.showStatus = function (text, duration) {
    // 如果没有传入duration，则默认两秒消失
    if (duration == "" || duration == null) {
      duration = 2000;
    }
    // 如果没有传入text，则默认提示 "请求成功"
    if (text == "" || text == null) {
      text = "请求成功";
    }
    var statusImg = require('./assets/img/bingo.png');
    var ele = document.createElement("div");
    ele.className = "loading";
    ele.innerHTML = '<div class="center-block bg"><img src="' + statusImg + '"><p>' + text + '</p></div>';
    document.body.appendChild(ele);
    setTimeout(function () {
      document.body.removeChild(ele);
    }, duration);
  };

  // 弹窗
  Popup.prototype.alert = function (title, content, btnText, btnCallback) {
    var self = this;
    var ele = document.createElement("div");
    ele.className = "alert";

    // 如果没有传入title的情况
    if (title == "" || title == null) {
      ele.innerHTML = '<div class="center-block alt"><p class="title">' + content + '</p><div class="operation"><div class="popup-btn">' + btnText + '</div></div></div>';
    } else {
      ele.innerHTML = '<div class="center-block alt"><p class="title">' + title + '</p><p class="content">' + content + '</p><div class="operation"><div class="popup-btn">' + btnText + '</div></div></div>';
    }

    ele.addEventListener('click', function (e) {
      if (e.target && e.target.className.match("popup-btn")) {
        // 初始化点击流程
        popupDefault = false;

        btnCallback && btnCallback.call(self);

        // if (! btnCallback || typeof btnCallback == 'undefined' || btnCallback == undefined) {
        if (!popupDefault) {
          document.body.removeChild(ele);
        }
        // }
      }
    });
    document.body.appendChild(ele);
  };

  // 两个按钮的弹窗
  Popup.prototype.confirm = function (title, content, okText, cancelText, okCallback, cancelCallback) {
    var self = this;
    var ele = document.createElement("div");
    ele.className = "confirm";

    // 如果没有传入title的情况
    if (title == "" || title == null) {
      ele.innerHTML = '<div class="center-block con"><p class="title">' + content + '</p><div class="operation"><div class="popup-btn cancelBtn">' + cancelText + '</div><div class="popup-btn confirmBtn">' + okText + '</div></div></div>'
    } else {
      ele.innerHTML = '<div class="center-block con"><p class="title">' + title + '</p><p class="content">' + content + '</p><div class="operation"><div class="popup-btn cancelBtn">' + cancelText + '</div><div class="popup-btn confirmBtn">' + okText + '</div></div></div>';
    }

    ele.addEventListener('click', function (e) {
      if (e.target && e.target.className.match("confirmBtn")) {
        // 初始化点击流程
        popupDefault = false;

        okCallback && okCallback.call(self);
        console.log(self);
        cancelCallback && cancelCallback.call(self);

        if (!popupDefault) {
          document.body.removeChild(ele);
        }
      }
      if (e.target && e.target.className.match("cancelBtn")) {
        document.body.removeChild(ele);
      }
    });

    document.body.appendChild(ele);
  };

  Vue.prototype.popup = new Popup(options);
}

