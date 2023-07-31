const selectGrid = $("#select-grid");
const selectWidth = $("#select-width");
const selectItem = $("#select-item");

const grid = $("#grid");
const wrapper = $("#wrapper");
const cardWrapper = $("#card-wrapper");

selectGrid.on("change", function () {
  grid.attr("class", "").addClass(selectGrid.val());
});

selectWidth.on("change", function () {
  wrapper.attr("class", "").addClass(selectWidth.val());
});

selectItem.on("change", function () {
  $("#card-wrapper > div").removeClass("active");
  $(`#card-wrapper > .${selectItem.val()}`).addClass("active");
});
