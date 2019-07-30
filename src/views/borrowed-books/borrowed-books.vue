<template>
  <div class="borrowed-books">
    <div class="head">
      <div>Borrowed Books</div>
      <div>
        <el-dropdown @command="command1">
          <span class="el-dropdown-link">
            Sort by
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="a">Book name</el-dropdown-item>
            <el-dropdown-item command="b">Borrower name</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>&nbsp;&nbsp;&nbsp;&nbsp;
        <el-dropdown @command="command2">
          <span class="el-dropdown-link">
            Filtered on
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="c">Borrower name</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="content">
      <ul class="book-wrap">
        <li v-for="(item,index) in books" :key="index" class="book">
          <div class="book-top" :class="'status'+item.type"></div>
          <div class="book-bottom">
            <div class="bottom-item hover-hide">
              <div class="book-name">Book name</div>
              <div class="book-type">Borrower name</div>
            </div>
            <div class="bottom-item hover-show" @click="returnBook(item)">Return</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      books: [
        {
          type: 1,
          name: "book name"
        },
        {
          type: 0,
          name: "book name"
        }
      ]
    };
  },
  methods: {
    command1(val) {
      console.log(val);
    },
    command2(val) {
      console.log(val);
    },
    returnBook(item) {
      console.log(item);
    }
  }
};
</script>

<style>
.borrowed-books {
  position: relative;
  padding: 80px;
  padding-bottom: 20px;
  height: 100%;
  box-sizing: border-box;
  background: rgba(240, 242, 245, 1);
}
.borrowed-books .head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 80px;
  padding: 0 80px;
  box-sizing: border-box;
}
.borrowed-books .content {
  width: 100%;
  height: 100%;
}
.borrowed-books .content .book-wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  width: 100%;
  height: 100%;
  overflow: auto;
}
.borrowed-books .content .book-wrap .book {
  width: 150px;
  height: 203px;
  margin: 10px;
}
.borrowed-books .content .book-wrap .book .book-top {
  width: 100%;
  height: 155px;
}
.borrowed-books .content .book-wrap .book .book-top.status0 {
  background: url("../../assets/img/book1.jpg");
  background-size: 100% 100%;
  background-position: center center;
}
.borrowed-books .content .book-wrap .book .book-top.status1 {
  background: url("../../assets/img/book2.jpg");
  background-size: 100% 100%;
  background-position: center center;
}
.borrowed-books .content .book-wrap .book .book-top.status2 {
  background: url("../../assets/img/book3.jpg");
  background-size: 100% 100%;
  background-position: center center;
}
.borrowed-books .content .book-wrap .book .book-bottom {
  background: #fff;
  height: 48px;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.borrowed-books .content .book-wrap .book .book-bottom .bottom-item {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.borrowed-books .content .book-wrap .book .book-bottom .hover-show {
  display: none;
  height: 100%;
  line-height: 1;
  text-align: center;
  color: #fff;
}

.borrowed-books .content .book-wrap .book .book-bottom:hover .hover-show {
  display: block;
  background: #faad14;
  line-height: 48px;
  height: 48px;
  box-sizing: border-box;
}
.borrowed-books .content .book-wrap .book .book-bottom:hover .hover-hide {
  display: none;
}
.borrowed-books .content .book-wrap .book .book-bottom .book-name {
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  height: 18px;
  line-height: 18px;
  color: rgba(0, 0, 0, 1);
}
.borrowed-books .content .book-wrap .book .book-bottom .book-type {
  text-align: center;
  height: 14px;
  font-size: 12px;
  font-family: Arial;
  font-weight: 400;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.45);
}
</style>
