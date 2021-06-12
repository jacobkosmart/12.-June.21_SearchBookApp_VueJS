<template>
  <div class="container">
    <input
      v-model="title"
      class="form-control"
      type="text" 
      placeholder="책 제목 검색 (최대 50개 까지 검색 가능)" 
      @keyup.enter="apply" />
  
    <div class="selects">
      <select
        v-for="filter in filters"
        v-model="$data[filter.name]"
        :key="filter.name"
        class="form-select">
        <option
          v-if="filter.name === 'year'"
          value="">
          All Years
        </option>
        <option
          v-for="item in filter.items"
          :key="item">
          {{ item }}
        </option>
      </select>
    </div>
    <button
      class="btn btn-primary"
      @click="apply">
      검색
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      type: 'accuracy',
      number: 10,
      year: '',
      filters: [
        {
          name: 'type',
          items: ['accuracy', 'latest']
        }
        // {
        //   name: 'number',
        //   items: [10, 20, 30, 40, 50]
        // }
        // {
        //   name: 'year',
        //   items: (() => {
        //     const years = []
        //     const thisYear = new Date().getFullYear() // 올해 연도 자동으로 변수 선언
        //     for (let i = thisYear; i >= 1985; i--) {
        //       years.push(i)
        //     }
        //     return years
        //   })()
        // }
      ]
    }
  },
  methods: {
    async apply() {
      this.$store.dispatch('book/searchBooks', {
        title: this.title,
        type: this.type,
        number: this.number,
      })
    }
  }
}
</script>

<style lang="scss" scoped>

  .container {
    display: flex;
    > * { // 자식요소의 전체 선택자
      margin-right: 10px;
      font-size: 15px;
      &:last-child {
        margin-right: 0;
      }
    }
    .selects {
      display: flex;
      select {
        width: 150px;
        margin-right: 10px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .btn {
      width: 150px;
      height: 50px;
      font-weight: 700;
      flex-shrink: 0; // flex 시 제일 마지막에 있기 때문에 자동으로 남는 부분만 사용하게 됨 0으로 해놓으면 감소가 안됨
    } 
    @include media-breakpoint-down(lg) {
      display: block;
      input {
        margin-right: 0;
        margin-bottom: 10px;
      }
      .selects {
        margin-right: 0;
        margin-bottom: 10px;
        select {
          width: 100%;
        }
      }
      .btn {
        width: 100%;
      }
    }
  }
</style>