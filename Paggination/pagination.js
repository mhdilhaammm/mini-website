//Data student
var rankList = [
  {
    no: "1",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "2",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "3",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "4",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "5",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "6",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "7",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "8",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "9",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "10",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "11",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "12",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "13",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "14",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "15",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "16",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "17",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "18",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "19",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
  {
    no: "20",
    name: "Muhammad Ilham",
    keterangan: "Sedang Magang",
    jurusan: "Teknik Informatika",
  },
];

var array = [];
var arrayLenght = 0;
var tableSize = 10;
var startIndex = 1;
var endIndex = 0;
var currentIndex = 1;
var maxIndex = 0;

function preLoadCalculations() {
  array = rankList;
  arrayLenght = array.length;
  maxIndex = arrayLenght / tableSize;

  if (arrayLenght % tableSize > 0) {
    maxIndex++;
  }
}

function displayButtonTable() {
  preLoadCalculations();
  $(".index_buttons button").remove();
  $(".index_buttons").append("<button onclick='prev()'>Previous</button>");
  for (var i = 1; i <= maxIndex; i++) {
    $(".index_buttons").append(
      '<button onclick="indexPagination(' +
        i +
        ')" index="' +
        i +
        '">' +
        i +
        "</button>"
    );
  }
  $(".index_buttons").append("<button onclick='next()'>Next</button>");
  higlightIndextButton();
}

function higlightIndextButton() {
  startIndex = (currentIndex - 1) * tableSize + 1;
  endIndex = startIndex + tableSize - 1;
  if (endIndex > arrayLenght) {
    endIndex = arrayLenght;
  }

  $(".footer span").text(
    `Showing ${startIndex} to ${endIndex} of ${arrayLenght} entries`
  );
  $(".index_buttons button").removeClass("active");
  $(".index_buttons button[index='" + currentIndex + "']").addClass("active");
  displayTabelRow();
}

function displayTabelRow() {
  $(".table table tbody tr").remove();
  var tabStart = startIndex - 1;
  var tabEnd = endIndex;

  for (i = tabStart; i < tabEnd; i++) {
    var student = array[i];
    var tr =
      "<tr>" +
      "<td>" +
      student["no"] +
      "</td>" +
      "<td>" +
      student["name"] +
      "</td>" +
      "<td>" +
      student["keterangan"] +
      "</td>" +
      "<td>" +
      student["jurusan"] +
      "</td>" +
      "</tr>" +
      $(".table table tbody").append(tr);
  }
}

displayButtonTable();

function next() {
  if (currentIndex < maxIndex) {
    currentIndex++;
    higlightIndextButton();
  }
}
function prev() {
  if (currentIndex > 1) {
    currentIndex--;
    higlightIndextButton();
  }
}
function indexPagination(index) {
  currentIndex = parseInt(index);
  higlightIndextButton();
}
