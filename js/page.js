document.addEventListener("DOMContentLoaded", function () {
  goTop();
  componentpage();

  swiperSlide();
  handleCookie();

  listActive();
  toggleActEle();

  commentEvent();
  writingEvent();
  notice_board();
  headlePost();
  selectAll();
  report();
  accordion_menu01();
  accordion_menu02();
  
  login();
  pupup();
  oneFile01();

  find_id();
  find_pw();
  find_pw_change();

  tab_change();
  sub_tab_change();
  scrap_tab_change();
});

/* module body scroll toggle */
const bodyScroll = (activeItem, bodyScroll) => {
  const tg_body = document.querySelector("body");

  if (activeItem === null) return;
  activeItem.addEventListener("click", function () {
    if (!bodyScroll) {
      tg_body.style.overflowY = "hidden";
    } else {
      tg_body.style.overflowY = "auto";
    }
  });
};

/* componentpage 화면 사이즈 변경 */
function componentpage() {
  const tg_wrap = document.querySelector("body");
  const tg_sizeControl = document.querySelector(".sizeControl");
  const tg_375 = document.querySelector(".sizeControl li:nth-child(1)");
  const tg_1280 = document.querySelector(".sizeControl li:nth-child(2)");

  if (tg_sizeControl == null) return;

  tg_375.addEventListener("click", function () {
    tg_wrap.style.maxWidth = "375px";
  });

  tg_1280.addEventListener("click", function () {
    tg_wrap.style.maxWidth = "1280px";
  });
}

/* scroll Top */
function goTop() {
  const tg_goTopBtn = document.querySelector(".goTopBtn");
  const tg_goTopBtn1 = document.querySelector(".goTopBtn img");

  if (tg_goTopBtn == null) return;

  tg_goTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  if (window.scrollY == 0) {
    tg_goTopBtn1.classList.add("pre");
  } else {
    tg_goTopBtn1.classList.remove("pre");
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY == 0) {
      tg_goTopBtn1.classList.add("pre");
    } else {
      tg_goTopBtn1.classList.remove("pre");
    }
  });
}

/* module list click toggle act */
function listActive() {
  const tg_List = document.querySelectorAll(".listActBox li");
  const tg_List1 = document.querySelectorAll(".listActBox1 li");
  const tg_List2 = document.querySelectorAll(".listActBox2 li");
  const tg_List3 = document.querySelectorAll(".listActBox3 li");

  const listActBox = (list) =>
    list.forEach((elem) => {
      elem.addEventListener("click", function () {
        for (let j = 0; j < elem.parentElement.childElementCount; j++) {
          elem.parentElement.children[j].classList.remove("act");
        }
        elem.classList.add("act");
      });
    });

  listActBox(tg_List);
  listActBox(tg_List1);
  listActBox(tg_List2);
  listActBox(tg_List3);
}

/* 체크박스 모두 선택 */
function selectAll()  {
  const checkBoxAll = document.querySelector('#termsUseCheckboxAll');
  const checkBoxAllLabal = document.querySelector('[for="termsUseCheckboxAll"]');
  const checkbox = document.querySelectorAll('.cheeckBox');

  if (checkBoxAllLabal === null) return;

  checkBoxAllLabal.addEventListener("click", function(){
    checkbox.forEach((item) => {
      item.checked = !checkBoxAll.checked;
    })
    
  })

  checkbox.forEach((item, index, array) => {
    item.addEventListener("click", function(){

      if(!item.checked){
        checkBoxAll.checked =false;
      }

      let array01 = [];

      array.forEach((item) => {
        array01.push(item.checked);
      });
      
      if(!array01.some(item => item == false)){
        checkBoxAll.checked = true;
      };

    })
  })

}

/* module click toggle act */
const toggleAct = (activeItem, addClass, bodyScroll = true) => {
  const tg_body = document.querySelector("body");

  if (activeItem === null) return;
  if (addClass === null) return;
  if (addClass === null) return;
  if (activeItem.length == 0) return;

  if(activeItem.length >= 1){
    activeItem.forEach((item) => {
      item.addEventListener("click", function () {
        addClass.classList.toggle("act");
    
        if (bodyScroll) {
          tg_body.style.overflowY = "auto";
        } else {
          tg_body.style.overflowY = "hidden";
        }
      });
    })
  }else{
    activeItem.addEventListener("click", function () {
      addClass.classList.toggle("act");
  
      if (bodyScroll) {
        tg_body.style.overflowY = "auto";
      } else {
        tg_body.style.overflowY = "hidden";
      }
    });
  }

};

/* module click remove act */
const removeAct = (activeItem, removeClass, bodyScroll = true) => {
  const tg_body = document.querySelector("body");

  if (activeItem === null) return;

  if(activeItem.length >= 1){
    
    activeItem.forEach((item) => {
      item.addEventListener("click", function () {
        removeClass.classList.remove("act");
    
        if (bodyScroll) {
          tg_body.style.overflowY = "auto";
        } else {
          tg_body.style.overflowY = "hidden";
        }
      });
    })

  }else{
    activeItem.addEventListener("click", function () {
      removeClass.classList.remove("act");
  
      if (bodyScroll) {
        tg_body.style.overflowY = "auto";
      } else {
        tg_body.style.overflowY = "hidden";
      }
    });
  }

};

/*  active element event page */
function toggleActEle() {
  if (activeItem === null) return;
  activeItem.addEventListener("click", function () {
    if (!bodyScroll) {
      tg_body.style.overflowY = "hidden";
    } else {
      tg_body.style.overflowY = "auto";
    }
  });
};

/*  active element event page */
function toggleActEle() {

  /* index 등급 및 포인트 정보 */
  const tg_index_information = document.querySelector(".my_information_window");
  const tg_index_information_btn1 = document.querySelector(".my_information_window .topBox .arrowIcon");
  const tg_index_information_btn2 = document.querySelector(".my_information_window .bottomBox .arrowIcon");

  toggleAct(tg_index_information_btn1, tg_index_information);
  toggleAct(tg_index_information_btn2, tg_index_information);

  /* 맨토 */
  const tg_mentor_textBox_wrap = document.querySelector(".mentor_profileWrap .pageWrap .textWrap");

  const tg_mentor_textBox_btn1 = document.querySelector(".mentor_profileWrap .pageWrap .textWrap button.slideDown");
  const tg_mentor_textBox_btn2 = document.querySelector(".mentor_profileWrap .pageWrap .textWrap button.slideUp");

  toggleAct(tg_mentor_textBox_btn1, tg_mentor_textBox_wrap);
  toggleAct(tg_mentor_textBox_btn2, tg_mentor_textBox_wrap);

  /* 로그인 */
  const tg_login01 = document.querySelector(".join_membership .overBoxWrap02_bg");
  const tg_login01_btn01 = document.querySelectorAll(".join_membership .loginBtnBox li");
  const tg_login01_btn02 = document.querySelector(".join_membership .activeBox_bg");
  const tg_login01_btn03 = document.querySelector(".join_membership .formBox .cancel");

  toggleAct(tg_login01_btn01, tg_login01);
  toggleAct(tg_login01_btn02, tg_login01);
  toggleAct(tg_login01_btn03, tg_login01);

  const tg_login02_btn = document.querySelector(".join_membership .overDocument");
  const tg_login02_btn_1 = document.querySelectorAll('.join_membership .termsUse ul li span');
  const tg_login02_btn_2 = document.querySelector(".join_membership .overDocument .title01 .backBox");

  toggleAct(tg_login02_btn_1, tg_login02_btn);
  toggleAct(tg_login02_btn_2, tg_login02_btn);

  const tg_login02_btn01_1 = document.querySelector('.join_membership .termsUse ul li:nth-child(2) span');
  const tg_login02_btn02_1 = document.querySelector('.join_membership .termsUse ul li:nth-child(3) span');
  const tg_login02_btn03_1 = document.querySelector('.join_membership .termsUse ul li:nth-child(4) span');
  const tg_login02_btn04_1 = document.querySelector('.join_membership .termsUse ul li:nth-child(5) span');

  const tg_login02_btn01_2 = document.querySelector('.join_membership .overDocument ul.overDocument2');
  const tg_login02_btn02_2 = document.querySelector('.join_membership .overDocument ul.overDocument3');
  const tg_login02_btn03_2 = document.querySelector('.join_membership .overDocument ul.overDocument4');
  const tg_login02_btn04_2 = document.querySelector('.join_membership .overDocument ul.overDocument5');

  toggleAct(tg_login02_btn01_1, tg_login02_btn01_2);
  toggleAct(tg_login02_btn02_1, tg_login02_btn02_2);
  toggleAct(tg_login02_btn03_1, tg_login02_btn03_2);
  toggleAct(tg_login02_btn04_1, tg_login02_btn04_2);
  
  removeAct(tg_login02_btn_2, tg_login02_btn01_2);
  removeAct(tg_login02_btn_2, tg_login02_btn02_2);
  removeAct(tg_login02_btn_2, tg_login02_btn03_2);
  removeAct(tg_login02_btn_2, tg_login02_btn04_2);

  /* 검색창 */
  const tg_index_search = document.querySelector(".searchWrap");
  const tg_index_search_btn1 = document.querySelector(".searchOpenBtn");
  const tg_index_search_btn2 = document.querySelector(".searchCloseBtn");

  toggleAct(tg_index_search_btn1, tg_index_search, false);
  toggleAct(tg_index_search_btn2, tg_index_search);

  /* 알림창 */
  const tg_index_myAlert = document.querySelector(".myAlertWrap");
  const tg_index_myAlert_btn1 = document.querySelector(".myAlertOpenBtn");
  const tg_index_myAlert_btn2 = document.querySelector(".myAlertCloseBtn");

  toggleAct(tg_index_myAlert_btn1, tg_index_myAlert, false);
  toggleAct(tg_index_myAlert_btn2, tg_index_myAlert);

  /* 커뮤니티 메인 */
  const tg_h1 = document.querySelector(".communityWrap header .headBox h1");
  const tg_ul = document.querySelector(".communityWrap header ul");
  const tg_headBox = document.querySelector(".communityWrap header .headBox");

  toggleAct(tg_h1, tg_headBox);
  toggleAct(tg_h1, tg_ul);

  /* 커뮤니티 상세페이지 */
  const tg2_moreBox = document.querySelector(".moreBox");
  const tg2_openMore = document.querySelector(".openMore");

  const tg2_modifyBtn = document.querySelectorAll(".communityDetailWrap .modifyBtn");
  const tg2_btn_close2 = document.querySelector(".communityDetailWrap .closeBtn001");
  const tg2_btn_close3 = document.querySelector(".communityDetailWrap .closeBtn2");
  const tg2_btn_deleteBtn = document.querySelector(".communityDetailWrap .deleteBtn");
  const tg2_edit_act01 = document.querySelector(".communityDetailWrap .editWrap .active01");
  const tg2_edit_act02 = document.querySelector(".communityDetailWrap .editWrap .active02");
  const tg2_delete_act01 = document.querySelector(".communityDetailWrap .deleteWrap .active01");
  const tg2_delete_act02 = document.querySelector(".communityDetailWrap .deleteWrap .active02");
  const tg2_modifyWrap = document.querySelector(".communityDetailWrap .modifyWrap");
  const tg2_editWrap = document.querySelector(".communityDetailWrap .editWrap");
  const tg2_deleteWrap = document.querySelector(".communityDetailWrap .deleteWrap");

  const tg2_openAlert = document.querySelector(".communityDetailWrap .btnWrap .openAlert");
  const tg2_closeAlert = document.querySelector(".communityDetailWrap .btnWrap .closeAlert");
  const tg2_editAlert = document.querySelector(".communityDetailWrap .editWrap .btnWrap .submitAlert");
  const tg2_deleteAlert = document.querySelector(".communityDetailWrap .deleteWrap .btnWrap .submitAlert");

  // 설정탭 열기
  toggleAct(tg2_moreBox, tg2_openMore, false);

  bodyScroll(tg2_openMore, true);
  toggleAct(tg2_openMore, tg2_openMore, true);

  // 닫기
  toggleAct(tg2_modifyBtn, tg2_modifyWrap, false);
  toggleAct(tg2_btn_close2, tg2_modifyWrap, true);
  toggleAct(tg2_btn_close3, tg2_modifyWrap, true);

  // 수정하기
  toggleAct(tg2_openAlert, tg2_editWrap, false);
  toggleAct(tg2_closeAlert, tg2_editWrap, false);
  toggleAct(tg2_editAlert, tg2_edit_act01, false);
  toggleAct(tg2_editAlert, tg2_edit_act02, false);

  // 삭제하기
  toggleAct(tg2_btn_deleteBtn, tg2_deleteWrap, false);
  toggleAct(tg2_deleteAlert, tg2_delete_act01, false);
  toggleAct(tg2_deleteAlert, tg2_delete_act02, false);
}

/* 댓글 영역 */
function commentEvent(){
  const comment = (items, list) => {
    items.forEach((item, index) => {
      item.addEventListener("click", function(){
        console.log(item)
        list[index].classList.toggle("list")
      })
    })
  }

  const toggleCommentBox = (items, commentBox) => {
    items.forEach((item) => {
      item.addEventListener("click", function(){
        commentBox.classList.toggle("act");
      })
    })
  }

  const commentBoxAdd = (item) => {
    if(!item) return;

    if(item.length >= 1){
      item.forEach((elem) => {
        elem.addEventListener("click", function(){
          const tg_commentBox = document.querySelector(".commentBgBox .commentListWrap");
          tg_commentBox.classList.add("list");
        })
      })
    }else{
      item.addEventListener("click", function(){
        const tg_commentBox = document.querySelector(".commentBgBox .commentListWrap");
        tg_commentBox.classList.add("list");
      })
    }
  }

  const commentBoxremove = (item) => {
    if(!item) return;

    if(item.length >= 1){
      item.forEach((elem) => {
        elem.addEventListener("click", function(){
          const tg_commentBox = document.querySelector(".commentBgBox .commentListWrap");
          tg_commentBox.classList.remove("list");
        })
      })
    }else{
      item.addEventListener("click", function(){
        const tg_commentBox = document.querySelector(".commentBgBox .commentListWrap");
        tg_commentBox.classList.remove("list");
      })
    }
  }

  const tg_commentOpen01 = document.querySelectorAll("ul.commentWrap p.commentOpen");
  const tg_tagList = document.querySelectorAll("ul.commentWrap > li");

  const tg_commentBox = document.querySelector(".commentBgBox");
  
  const tg_commen_open01 = document.querySelectorAll("ul.commentWrap .openCommentBox");
  const tg_commen_open02 = document.querySelector(".commentBgBox .closeBtn01");
  const tg_commen_open03 = document.querySelectorAll("ul.commentList .commentOpen02");
  const tg_commen_open04 = document.querySelectorAll(".commentSection .commentOpen03");

  const tg_commen_close = document.querySelectorAll(".commentListWrap .closeBtn");

  if(!tg_commentBox) return;

  comment(tg_commentOpen01, tg_tagList);
  toggleCommentBox(tg_commen_close, tg_commentBox);
  toggleCommentBox(tg_commen_open01, tg_commentBox);
  toggleCommentBox(tg_commen_open04, tg_commentBox);
  
  commentBoxremove(tg_commen_open01);
  commentBoxremove(tg_commen_open03);
  commentBoxAdd(tg_commen_open02);
  commentBoxAdd(tg_commen_open04);
}

/* 신고하기 */
function report(){

  const tg_reportWrap = document.querySelector(".reportWrap");

  const tg_reportOpenBtn1 = document.querySelectorAll(".reportBtn");

  const tg_btn_close1 = document.querySelector(".reportWrap .closeBox");
  const tg_btn_close2 = document.querySelector(".reportWrap .btnWrap .cancel");

  toggleAct(tg_reportOpenBtn1, tg_reportWrap, false)

  toggleAct(tg_btn_close1, tg_reportWrap)
  toggleAct(tg_btn_close2, tg_reportWrap)

}

/* 아코디언 메뉴 */
function accordion_menu01(){

  /* module click toggle act */
  const accordionToggleAct = (activeItem, text) => {
  
    activeItem.forEach((item, index) => {
      item.addEventListener("click", function () {
        item.classList.toggle("act");

        if(item.classList.contains("act")){
          item.style.height = item.offsetHeight + text[index].offsetHeight + "px";
        }else{
          item.style.height = 48 + "px";
        }
      });
    })
  
  };

  const tg_accordion_btn = document.querySelectorAll(".accordion_menu > div");
  const tg_accordion_text = document.querySelectorAll(".accordion_menu > div p");

  if(!tg_accordion_btn) return;

  accordionToggleAct(tg_accordion_btn, tg_accordion_text);

}

function accordion_menu02(){

  /* module click toggle act */
  const accordionToggleAct = (activeItem, height) => {

    if(!activeItem) return;
  
    activeItem.forEach((item) => {
      item.addEventListener("click", function () {
        item.classList.toggle("act");

        if(item.classList.contains("act")){
          item.style.height = item.offsetHeight + item.children[1].scrollHeight + "px";
        }else{
          item.style.height = height + "px";
        }
      });
    })
  
  };

  const tg_accordion_btn01 = document.querySelectorAll(".accordion_menu01 > li");
  const tg_accordion_btn02 = document.querySelectorAll(".accordion_menu02 > li");

  accordionToggleAct(tg_accordion_btn01, 78);
  accordionToggleAct(tg_accordion_btn02, 58);

}

/* 팝업창 */
function pupup(){
  /* 팝업 열고 닫기 */
  const tg_popup_bg = document.querySelector(".alertWrap");
  
  const tg_popup_open01 = document.querySelectorAll(".popup_open01");
  const tg_popup_open02 = document.querySelectorAll(".popup_open02");
  const tg_popup_open03 = document.querySelectorAll('.popup_open03');

  const tg_popup_cencel01 = document.querySelectorAll(".alertWrap .cancel01");
  const tg_popup_cencel02 = document.querySelectorAll(".alertWrap .cancel02");
  const tg_popup_cencel03 = document.querySelectorAll('.alertWrap .cancel03');
  
  const tg_popup01 = document.querySelector('.alertWrap .popup01');
  const tg_popup02 = document.querySelector('.alertWrap .popup02');
  const tg_popup03 = document.querySelector('.alertWrap .popup03');

  const tg_popup02_enter = document.querySelector('.alertWrap .popup02 .btnWrap');

  if(!tg_popup_bg) return;

  toggleAct(tg_popup_open01, tg_popup_bg);
  toggleAct(tg_popup_open02, tg_popup_bg);
  toggleAct(tg_popup_open03, tg_popup_bg);
  
  toggleAct(tg_popup_open01, tg_popup01);
  toggleAct(tg_popup_open02, tg_popup02);
  toggleAct(tg_popup02_enter, tg_popup02);
  toggleAct(tg_popup02_enter, tg_popup02);
  toggleAct(tg_popup_open03, tg_popup03);
  
  toggleAct(tg_popup_cencel01, tg_popup01);
  toggleAct(tg_popup_cencel02, tg_popup02);
  toggleAct(tg_popup_cencel03, tg_popup03);
  
  toggleAct(tg_popup_cencel01, tg_popup_bg);
  toggleAct(tg_popup_cencel02, tg_popup_bg);
  toggleAct(tg_popup02_enter, tg_popup_bg);
  toggleAct(tg_popup02_enter, tg_popup_bg);
  toggleAct(tg_popup_cencel03, tg_popup_bg);

  /* 팝업 완료 되었습니다 노출 */
  const tg_popup_check01 = document.querySelector(".alertWrap .check01");
  const tg_popup_check02 = document.querySelector(".alertWrap .check02");
  const tg_popup_check03 = document.querySelector('.alertWrap .check03');

  const tg_popup_popup01_1 = document.querySelector(".alertWrap .popup01_1");
  const tg_popup_popup01_2 = document.querySelector(".alertWrap .popup02_1");
  const tg_popup_popup01_3 = document.querySelector('.alertWrap .popup03_1');
  
  toggleAct(tg_popup_check01, tg_popup01);
  toggleAct(tg_popup_check02, tg_popup02);
  toggleAct(tg_popup_check03, tg_popup03);
  
  toggleAct(tg_popup_check01, tg_popup_popup01_1);
  toggleAct(tg_popup_check02, tg_popup_popup01_2);
  toggleAct(tg_popup_check03, tg_popup_popup01_3);

}

/* 수정하기, 삭제하기, 신고하기 버튼 */
function headlePost(){
  const headleCommit01 = (itemList) => {
    itemList.forEach((item) => {
      item.addEventListener("click", function(){
        console.log(item.nextSibling);
        item.nextElementSibling.classList.toggle("act");
      });
    })
  }

  const headleCommit02 = (itemList) => {
    itemList.forEach((item, index) => {
      item.addEventListener("click", function(){
        item.classList.toggle("act");
      });
    })
  }

  const tg_more_btn = document.querySelectorAll(".headleCommit");
  const tg_commitOpenMore01 = document.querySelectorAll(".commitOpenMore");

  headleCommit01(tg_more_btn);
  headleCommit02(tg_commitOpenMore01);
}

/* 게시판 선택 + input value */
function notice_board() {
  /* module drop down list */
  const toggleList = (activeItem, openList, hasAct, defaultHeight = 0) => {
    if (activeItem !== null) {
      activeItem.addEventListener("click", function () {
        const index = openList.childElementCount;
        const height = openList.children[0].clientHeight;
        const itemHeight = index * height;
  
        if (hasAct.classList.contains("act")) {
          openList.style.height = `${itemHeight}px`;
        } else {
          openList.style.height = `${defaultHeight}px`;
        }
      });
    }
  };

  /* 게시판 선택 바꾸기 */
  const communityWriting = (actListBox, inputValue) => {
    if (actListBox === null) return;
    for (let i = 0; i < actListBox.childElementCount; i++) {
      actListBox.children[i].addEventListener("click", function () {
        if (i === 0) return;
        actListBox.children[0].innerHTML = `${actListBox.children[i].textContent} <img src="images/arrowBox/icon_arrow.png" alt="화살표">`;
        actListBox.classList.remove("act");
        actListBox.style.height = `50px`;

        if (!inputValue) return;
        inputValue.value = `${actListBox.children[i].textContent}`;
      });
    }
  };

  const writingWrap_ul = document.querySelector(".writingWrap ul");
  const writingWrap_li = document.querySelector(".writingWrap ul li:nth-child(1)");
  const writingWrap_input = document.querySelector('[name="notice-board"]');
  const myPage_header = document.querySelector('header.myPage .my_info .status');
  const myPage_header_ul = document.querySelector('header.myPage .my_info .status ul');
  const myPage_header2 = document.querySelector('.wrap .pageWrap .state');
  const myPage_header2_ul = document.querySelector('.wrap .pageWrap .state ul');

  toggleAct(writingWrap_li, writingWrap_ul);
  toggleList(writingWrap_li, writingWrap_ul, writingWrap_ul, 50);
  communityWriting(writingWrap_ul, writingWrap_input);
  toggleAct(myPage_header, myPage_header);
  toggleAct(myPage_header, myPage_header_ul);
  toggleAct(myPage_header2, myPage_header2);
  toggleAct(myPage_header2, myPage_header2_ul);
}

/* 게시판 선택 및 텍스트 글자수 입력 */
function writingEvent() {
  /* module 글자 수 세기 */
  const writing = (textarea, textCount, maxCount) => {
    if (textarea == null) return;

    const cn1 = maxCount
      .toString()
      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    textarea.addEventListener("keydown", function (e) {
      let textCount_length = textarea.value.length;
      textCount.innerHTML = `${textCount_length} / ${cn1} 자`;
      if (textCount_length >= maxCount) {
        e.target.value = e.target.value.substr(0, maxCount); // 과 글자는 잘라냄
        alert(`최대 ${cn1} 글자 수를 초과했습니다.`);
      }
    });

    textarea.addEventListener("keyup", function (e) {
      let textCount_length = textarea.value.length;
      textCount.innerHTML = `${textCount_length} / ${cn1} 자`;
      if (textCount_length >= maxCount) {
        e.target.value = e.target.value.substr(0, maxCount); // 과 글자는 잘라냄
        alert(`최대 ${cn1} 글자 수를 초과했습니다.`);
      }
    });
  };

  /* 컴포넌트 페이지 */
  const textInput = document.querySelector(".modulepage .textInput");
  const textCount = document.querySelector(".modulepage .textCount");

  writing(textInput, textCount, 200);

  /* 커뮤니티 수정하기 */
  const tg1_textarea = document.querySelector(".communityDetailWrap .textareaBox .textInput");
  const tg1_textCount = document.querySelector(".communityDetailWrap .textareaBox .textCount");

  writing(tg1_textarea, tg1_textCount, 200);

  /* 커뮤니티 수정하기 */
  const tg1_textarea01 = document.querySelector(".customer_inquiry_answer form .textInput");
  const tg1_textCount01 = document.querySelector(".customer_inquiry_answer form .textCount");

  writing(tg1_textarea01, tg1_textCount01, 1000);
}

/* 이미지 미리보기 */
function readURL(input) {
  if (input.files && input.files[0]) {
    let reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").src = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  } else {
    document.getElementById("preview").src = "";
  }
}

/* 로그인 페이지 */
function login(){
  /* 다음 입력으로 넘어가기 */
  const tg_membership_questionAll = document.querySelectorAll('.enter_membership [class^="question"]');
  const tg_membership_nextBtn = document.querySelectorAll(".enter_membership .nextBtn");
  const tg_membership_listActBox1 = document.querySelector(".enter_membership .listActBox1");
  
  const tg_membership_question1 = document.querySelectorAll('.enter_membership .question01 .listActBox1 li');
  const tg_membership_question2 = document.querySelectorAll('.enter_membership .question02 .listActBox2 li');
  const tg_membership_question3 = document.querySelector('.enter_membership .question03 [type="text"]');
  const tg_membership_question4 = document.querySelector('.enter_membership .question04 [type="date"]');
  const tg_membership_question4_name = document.querySelector('.enter_membership .question04 strong i');

  const tg_membership_form1 = document.querySelector('.enter_membership [name="question01"]');
  const tg_membership_form2 = document.querySelector('.enter_membership [name="question02"]');
  const tg_membership_form3 = document.querySelector('.enter_membership [name="question03"]');
  const tg_membership_form4 = document.querySelector('.enter_membership [name="question04"]');

  if(!tg_membership_question3) return;


  tg_membership_nextBtn.forEach((item, index) => {
    item.addEventListener("click", () => {
      if(index <= tg_membership_questionAll.length)
      tg_membership_questionAll[index].addEventListener("click", () => {

        tg_membership_questionAll[index].classList.remove("open");
        
        for(let i = 0; i < tg_membership_listActBox1.children.length; i++){
          if(tg_membership_listActBox1.children[i].classList.contains("act")){
            if(i == 0){
              tg_membership_questionAll[index + 1].classList.add("open");
            }else{
              tg_membership_questionAll[index + 5].classList.add("open");
            }
          }
        }
      });
    });
  })

  tg_membership_question1.forEach((item) => {
    item.addEventListener("click", function(){
      tg_membership_form1.value = item.innerText;
      tg_membership_nextBtn[0].classList.add("next")
    })
  })

  tg_membership_question2.forEach((item) => {
    item.addEventListener("click", function(){
      tg_membership_form2.value = item.innerText;
      tg_membership_nextBtn[1].classList.add("next")
    })
  })

  tg_membership_question3.addEventListener("input", function(){
    tg_membership_form3.value = tg_membership_question3.value;
    if(tg_membership_question3.value){
      tg_membership_nextBtn[2].classList.add("next");
      tg_membership_question4_name.innerText = `${tg_membership_form3.value}`
    }else{
      tg_membership_nextBtn[2].classList.remove("next");
    }
  })

  tg_membership_question4.addEventListener("input", function(){
    tg_membership_form4.value = tg_membership_question4.value;
    if(tg_membership_question4.value){
      tg_membership_nextBtn[3].classList.add("next");
    }else{
      tg_membership_nextBtn[3].classList.remove("next");
    }
  })

}

/* 아이디 찾기 */
function find_id() {
  const tg_input_name = document.querySelector('.find_id input.name');
  const tg_input_phoneNum = document.querySelector('.find_id input.phoneNum');
  const tg_button_inputBtn = document.querySelector('.find_id button.inputBtn');

  const tg_input_name_span = document.querySelector('.find_id input.name + span');
  const tg_input_phoneNum_span = document.querySelector('.find_id input.phoneNum + span');

  if(!tg_input_name) return;


  tg_input_name.addEventListener("input", function(){
    if(tg_input_name.value && tg_input_phoneNum.value){
      tg_button_inputBtn.classList.remove("act");
    }else{
      tg_button_inputBtn.classList.add("act");
    }

    if(tg_input_name.value){
      tg_input_name_span.innerHTML = `<img src="images/iconBox/icon_etc_close_2.png" alt="닫기 버튼">`
    }else{
      tg_input_name_span.innerHTML = '';
    }
  })

  tg_input_name_span.addEventListener("click", function(){
    tg_input_name.value = "";
    tg_input_name_span.innerHTML = '';
    tg_button_inputBtn.classList.add("act");
  })

  tg_input_phoneNum.addEventListener("input", function(){
    if(tg_input_name.value && tg_input_phoneNum.value){
      tg_button_inputBtn.classList.remove("act");
    }else{
      tg_button_inputBtn.classList.add("act");
    }

    if(tg_input_phoneNum.value){
      tg_input_phoneNum_span.innerHTML = '<img src="images/iconBox/icon_etc_close_2.png" alt="닫기 버튼">'
    }else{
      tg_input_phoneNum_span.innerHTML = '';
    }
  })

  tg_input_phoneNum_span.addEventListener("click", function(){
    tg_input_phoneNum.value = "";
    tg_input_phoneNum_span.innerHTML = '';
    tg_button_inputBtn.classList.add("act");
  })
}

/* 비밀번호 찾기 */
function find_pw() {
  const tg_input_certification = document.querySelector('.find_pw .certification');

  const tg_input_id = document.querySelector('.find_pw input.inputid');
  const tg_input_name = document.querySelector('.find_pw input.name');
  const tg_input_phoneNum = document.querySelector('.find_pw input.phoneNum');
  const tg_input_inputNum = document.querySelector('.find_pw input.inputNum');
  const tg_button_inputBtn = document.querySelector('.find_pw button.inputBtn');
  const tg_button_inputBtn01 = document.querySelector('.find_pw button.inputBtn01');

  const tg_input_id_span = document.querySelector('.find_pw input.inputid + span');
  const tg_input_name_span = document.querySelector('.find_pw input.name + span');
  const tg_input_inputNum_timer = document.querySelector('.find_pw input.inputNum ~ span.timer');
  const tg_input_inputNum_resend = document.querySelector('.find_pw input.inputNum + span.resend');
  const tg_input_phoneNum_span = document.querySelector('.find_pw input.phoneNum + span');

  if(!tg_input_id) return;

  /* 카카오 인증 요청 */
  tg_input_id.addEventListener("input", function(){
    if(tg_input_name.value && tg_input_phoneNum.value && tg_input_id.value){
      tg_button_inputBtn.classList.remove("act");
    }else{
      tg_button_inputBtn.classList.add("act");
    }

    if(tg_input_id.value){
      tg_input_id_span.innerHTML = '<img src="images/iconBox/icon_etc_close_2.png" alt="닫기 버튼">'
    }else{
      tg_input_id_span.innerHTML = '';
    }
  })

  tg_input_id_span.addEventListener("click", function(){
    tg_input_id.value = "";
    tg_input_id_span.innerHTML = '';
    tg_button_inputBtn.classList.add("act");
  })

  tg_input_name.addEventListener("input", function(){
    if(tg_input_name.value && tg_input_phoneNum.value && tg_input_id.value){
      tg_button_inputBtn.classList.remove("act");
    }else{
      tg_button_inputBtn.classList.add("act");
    }

    if(tg_input_name.value){
      tg_input_name_span.innerHTML = `<img src="images/iconBox/icon_etc_close_2.png" alt="닫기 버튼">`
    }else{
      tg_input_name_span.innerHTML = '';
    }
  })

  tg_input_name_span.addEventListener("click", function(){
    tg_input_name.value = "";
    tg_input_name_span.innerHTML = '';
    tg_button_inputBtn.classList.add("act");
  })

  tg_input_phoneNum.addEventListener("input", function(){
    if(tg_input_name.value && tg_input_phoneNum.value && tg_input_id.value){
      tg_button_inputBtn.classList.remove("act");
    }else{
      tg_button_inputBtn.classList.add("act");
    }

    if(tg_input_phoneNum.value){
      tg_input_phoneNum_span.innerHTML = '<img src="images/iconBox/icon_etc_close_2.png" alt="닫기 버튼">'
    }else{
      tg_input_phoneNum_span.innerHTML = '';
    }
  })

  tg_input_phoneNum_span.addEventListener("click", function(){
    tg_input_phoneNum.value = "";
    tg_input_phoneNum_span.innerHTML = '';
    tg_button_inputBtn.classList.add("act");
  })

  /* 인증번호 */
  tg_input_inputNum.addEventListener("input", function(){
    if(tg_input_inputNum.value){
      tg_button_inputBtn01.classList.remove("act");
    }else{
      tg_button_inputBtn01.classList.add("act");
    }

    if(tg_input_inputNum.value){
      tg_input_inputNum_resend.innerHTML = '<button type="button" class="pt4_12 mty_button03 inputBtn02 color_mg">인증번호 재발송</button>'
    }
  })

  tg_button_inputBtn.addEventListener("click", function(){
    
    tg_input_certification.classList.remove("displaynone");
    tg_button_inputBtn.classList.add("displaynone");
    tg_input_inputNum_resend.innerHTML = '<button type="button" class="pt4_12 mty_button03 inputBtn02 color_mg">인증번호 재발송</button>'

    /* 인증번호 타이머 */
    let time = 240;
  
    setInterval(function () {
      if (time > 0) {
        time = time - 1; 
        let min = Math.floor(time / 60);
        let sec = String(time % 60).padStart(2, "0");
        
        tg_input_inputNum_timer.innerHTML = `${min}:${sec}`;
      } else {
        tg_button_inputBtn01.classList.add("act");
      }
    }, 1000);
  });

}

/* 비밀번호 변경하기 */
function find_pw_change() {
  const tg_input_newpw = document.querySelector('.find_pw_change input.new_pw');
  const tg_input_renewpw = document.querySelector('.find_pw_change input.re_new_pw');
  const tg_button_inputBtn = document.querySelector('.find_pw_change button.inputBtn');

  const tg_input_newpw_span = document.querySelector('.find_pw_change input.new_pw + span');
  const tg_input_renewpw_span = document.querySelector('.find_pw_change input.re_new_pw + span');

  if(!tg_input_newpw) return;


  tg_input_newpw.addEventListener("input", function(){
    if(tg_input_newpw.value && tg_input_renewpw.value){
      tg_button_inputBtn.classList.remove("act");
    }else{
      tg_button_inputBtn.classList.add("act");
    }

    if(tg_input_newpw.value){
      tg_input_newpw_span.innerHTML = `<img src="images/iconBox/icon_etc_close_2.png" alt="닫기 버튼">`
    }else{
      tg_input_newpw_span.innerHTML = '';
    }
  })

  tg_input_newpw_span.addEventListener("click", function(){
    tg_input_newpw.value = "";
    tg_input_newpw_span.innerHTML = '';
    tg_button_inputBtn.classList.add("act");
  })

  tg_input_renewpw.addEventListener("input", function(){
    if(tg_input_newpw.value && tg_input_renewpw.value){
      tg_button_inputBtn.classList.remove("act");
    }else{
      tg_button_inputBtn.classList.add("act");
    }

    if(tg_input_renewpw.value){
      tg_input_renewpw_span.innerHTML = '<img src="images/iconBox/icon_etc_close_2.png" alt="닫기 버튼">'
    }else{
      tg_input_renewpw_span.innerHTML = '';
    }
  })

  tg_input_renewpw_span.addEventListener("click", function(){
    tg_input_renewpw.value = "";
    tg_input_renewpw_span.innerHTML = '';
    tg_button_inputBtn.classList.add("act");
  })
}

/* 단일 파일 파일명 */
function oneFile01() {
  const attFile = document.querySelector(".customer_inquiry_answer form #upload1");

  if(!attFile) return;
  
  attFile.addEventListener("change", function(){
    
    document.querySelector('.file-list').innerHTML = `
    <p>${attFile.files[0].name}</p>
    <img src="images/iconBox/icon_etc_close_3.png" onclick="oneFile02()" alt="닫기 아이콘">
    `;
  })

}

function oneFile02() {
  const attFile = document.querySelector(".customer_inquiry_answer form #upload1");
  document.querySelector('.file-list').innerHTML = ``;
  attFile.value = '';
}

/* 단일 파일 파일명 */
function oneFile01() {
  const attFile = document.querySelector(".customer_inquiry_answer form #upload1");

  if(!attFile) return;
  
  attFile.addEventListener("change", function(){
    
    document.querySelector('.file-list').innerHTML = `
    <p>${attFile.files[0].name}</p>
    <img src="images/iconBox/icon_etc_close_3.png" onclick="oneFile02()" alt="닫기 아이콘">
    `;
  })

}

function oneFile02() {
  const attFile = document.querySelector(".customer_inquiry_answer form #upload1");
  document.querySelector('.file-list').innerHTML = ``;
  attFile.value = '';
}

// 글 작성 이미지 미리보기
let fileNo = 0;
let filesArr = new Array();

/* 첨부파일 추가 */
function addFile(obj) {
  let maxFileCnt = 10; // 첨부파일 최대 개수
  let attFileCnt = document.querySelectorAll(".filebox").length; // 기존 추가된 첨부파일 개수
  let remainFileCnt = maxFileCnt - attFileCnt; // 추가로 첨부가능한 개수
  let curFileCnt = obj.files.length; // 현재 선택된 첨부파일 개수

  // 첨부파일 개수 확인
  if (curFileCnt > remainFileCnt) {
    alert("첨부파일은 최대 " + maxFileCnt + "개 까지 첨부 가능합니다.");
  }

  for (let i = 0; i < Math.min(curFileCnt, remainFileCnt); i++) {
    const file = obj.files[i];

    // 첨부파일 검증
    if (validation(file)) {
      // 파일 배열에 담기
      let reader = new FileReader();
      filesArr.push(file);
      reader.readAsDataURL(file);

      // 목록 추가
      const dataImg = document.createElement("div");

      dataImg.id = `file${fileNo}`;
      dataImg.classList.add("swiper-slide");

      dataImg.innerHTML = `
              <div class="filebox posi_rel">
                <img id="preview${fileNo}" />
                <a class="delete posi_ab" onclick="deleteFile(${fileNo});"><img src="images/iconBox/icon_etc_close_2.png" alt="닫기 아이콘"></a>
                <a class="delete posi_ab" onclick="deleteFile(${fileNo});"><img src="images/iconBox/icon_etc_close_2.png" alt="닫기 아이콘"></a>
              </div>
            `;
            
            

      document.querySelector(".file-list").append(dataImg);

      document.getElementById(`preview${fileNo}`).src = URL.createObjectURL(
        filesArr[fileNo]
      );

      fileNo++;
    } else {
      continue;
    }
  }
  // 초기화
  document.querySelector("input[type=file]").value = "";
}

/* 첨부파일 검증 */
function validation(obj) {
  const fileTypes = [
    "application/pdf",
    "image/gif",
    "image/jpeg",
    "image/png",
    "image/bmp",
    "image/tif",
    "application/haansofthwp",
    "application/x-hwp",
  ];
  if (obj.size > 100 * 1024 * 1024) {
    alert("최대 파일 용량인 100MB를 초과한 파일은 제외되었습니다.");
    return false;
  } else if (obj.name.lastIndexOf(".") == -1) {
    alert("확장자가 없는 파일은 제외되었습니다.");
    return false;
  } else if (!fileTypes.includes(obj.type)) {
    alert("첨부가 불가능한 파일은 제외되었습니다.");
    return false;
  } else {
    return true;
  }
}

/* 첨부파일 삭제 */
function deleteFile(num) {
  document.querySelector("#file" + num).remove();
  filesArr[num].is_delete = true;
}

/* 오늘 하루 안보기 쿠키 설정 */
function getCookie(name) {
  const encodeName = encodeURIComponent(name);
  const matches = document.cookie.match(new RegExp(
    "(?:^|; )" + encodeName.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));

  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, days) {
  let expires = '';
  const updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value);

  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${updatedCookie}${expires}; path=/`;
}

function handleCookie(){
  const tg_btn_today_close = document.querySelector(".popup_oneday .btn_today_close");
  const tg_btn_close = document.querySelector(".popup_oneday .closeBox .btn_close");
  const tg_popup_oneday = document.querySelector(".popup_oneday");

  if(!tg_btn_today_close) return;

  toggleAct(tg_btn_close, tg_popup_oneday)

  tg_btn_today_close.addEventListener("click", function(){
    setCookie('cookie', "one_day", 1)
    if(getCookie("cookie") ==  "one_day"){
      tg_popup_oneday.classList.remove("act")
    }
  });

  if(getCookie("cookie") ==  "one_day"){
    tg_popup_oneday.classList.remove("act")
  }
}

/* swiper 슬라이드 */
function swiperSlide() {
  let swiper1 = new Swiper(".topSwiper", {
    slidesPerView: "auto",
    freeMode: true,
  });

  let swiper2 = new Swiper(".centerSwiper", {
    slidesPerView: "auto",
    spaceBetween: 11,
  });

  let swiper3 = new Swiper(".fileSwiper", {
    slidesPerView: "auto",
    spaceBetween: 6,
    freeMode: true,
  });

  let swiper4 = new Swiper(".mainSwiper", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      dynamicMainBullets: 9,
    },
    autoplay: {
      delay: 6000,
      disableOnInteraction: false,
    },
  });

  let swiper5 = new Swiper(".contents03Swiper", {
    slidesPerView: "auto",
    spaceBetween: 11,
  });

  var swiper6 = new Swiper(".contents04Swiper", {
    slidesPerView: "auto",
    spaceBetween: 11,
  });

  window.onload = function () {
    let swiper7 = new Swiper(".rollerSwiper01", {
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      allowTouchMove: false,
      breakpointsInverse: true,
      speed: 5000,
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: "auto",
      spaceBetween: 8,
      initialSlide: 3,
    });

    let swiper8 = new Swiper(".rollerSwiper02", {
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      allowTouchMove: false,
      breakpointsInverse: true,
      speed: 5000,
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: "auto",
      spaceBetween: 8,
      centeredSlides: true,
    });
  };


  var swiper9 = new Swiper(".popupSwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });
}

/* tab */
function tab_change(){
  const tab = document.querySelectorAll('.wrap .pageWrap .tabs .tab-link');
  const tab_content = document.querySelectorAll('.wrap .pageWrap .tab-content');
  for(let i=0; i < tab.length; i++){
      tab[i].addEventListener("click", function(){
          const tab_id = this.getAttribute('data-tab');
          for(let j=0; j < tab.length; j++){
              tab[j].classList.remove('current');
              tab_content[j].classList.remove('current');
  
              const new_tab = document.getElementById(tab_id);
              new_tab.classList.add('current');
          }
      });
  }
}

/* sub tab */
function sub_tab_change(){
  const tab = document.querySelectorAll('.wrap .pageWrap .sub-tabs .sub-tab-link');
  const tab_content = document.querySelectorAll('.wrap .pageWrap .sub-tab-content');
  for(let i=0; i < tab.length; i++){
      tab[i].addEventListener("click", function(){
          const tab_id = this.getAttribute('data-tab');
          for(let j=0; j < tab.length; j++){
              tab[j].classList.remove('current');
              tab_content[j].classList.remove('current');
  
              const new_tab = document.getElementById(tab_id);
              new_tab.classList.add('current');
          }
      });
  }
}

/* 나의 스크랩북 tab change */
function scrap_tab_change(){
  const tabs_like = document.querySelector('.wrap .scrap ul.tabs li.like-tab');
  const tabs_scrap = document.querySelector('.wrap .scrap ul.tabs li.scrap-tab');
  const tab_like = document.querySelector('.wrap .scrap div.like-tab');
  const tab_scrap = document.querySelector('.wrap .scrap div.scrap-tab');

  if(!tab_like) return;

  if(!tab_like) return;

  tab_like.style.display = "block";

  tabs_like.addEventListener("click", function(){
    tab_like.style.display = "block";
    tab_scrap.style.display = "none";
  });
  tabs_scrap.addEventListener("click", function(){
    tab_scrap.style.display = "block";
    tab_like.style.display = "none";
  });

}
