<template>
  <div class="event-table">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
  .event-table {
    width: 100% !important;
    .el-input__inner {
      border: 1px solid #6dcaf3 !important;
      color: #6dcaf3 !important;
      background: transparent !important;
    }
    .el-loading-mask {
      background-color: rgba(0,0,0,.2);
    }
    .el-table {
      background: transparent;
      font-size: 13px;
      .el-table__empty-text {
        color: #39c9ff;
      }
      .cell {
        line-height: 36px;
      }
      table {
        background: transparent;
        .cell {
          padding: 0 2px !important;
        }
      }
      &:before {
        height: 0px !important;
      }
      td {
        border-bottom: 1px dashed rgba(#37ace2, .6) !important;
        padding: 0 !important;
      }
      th {
        border: none !important;
        background: transparent !important;
        color: #39c9ff !important;
        padding: 0 !important;
      }
      thead tr:hover{
        border: none;
        box-shadow:none;
      }
      tr {
        background: transparent !important;
        color:#fff;
        cursor: pointer;
        border: 1px solid transparent;
        box-shadow:transparent 0px 0px 8px inset;
        &.org {
          color: #ff9314
        }
        &.green {
          color: #3af7cf
        }
        &.current-row td {
          background: rgba(255,255,255,.1) !important;
        }
        &:hover td {
          background: rgba(255,255,255,.06) !important;
        }
        &.active{
          color: #6dcaf3;
        }
        &:hover{
          border: 1px solid #14bfff;
          box-shadow:rgba(#14bfff,1) 0px 0px 20px inset;
        }
        &.current-row{
          border: 1px solid #14bfff;
          box-shadow:rgba(#14bfff,1) 0px 0px 20px inset;
        }
      }
      thead {
        background: rgba(#39c9ff, .06);
        line-height: 36px;
      }
    }
  }
</style>
