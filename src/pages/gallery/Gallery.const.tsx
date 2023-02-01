import fotoKKN from "../../assets/img/foto_kkn3.jpg";
import umkm from "../../assets/img/umkm.jpg";

export function getImages() {
  let galleryArr: Array<Object> = [];
  const patternFileIdGDrive = /\/file\/d\/([^\/]+)/;
  let SHEET_ID = "1S3ts6BkFrglksykqR492olCZzWtoF-nRDB3tbBXyRdk";
  let SHEET_TITLE = `Sheet1`;

  let FULL_URL =
    "https://docs.google.com/spreadsheets/d/" +
    SHEET_ID +
    "/gviz/tq?sheet=" +
    SHEET_TITLE;

  // if (umkmData.length <= 0) {
  fetch(FULL_URL)
    .then((res) => res.text())
    .then((rep) => {
      let data = JSON.parse(rep.substring(47).slice(0, -2));
      galleryArr = [];
      console.log('data', data)
      for (let i = 0; i < data.table.rows.length; i++) {
        let element = data.table.rows[i];

        const getFileId = patternFileIdGDrive.exec(
          element.c[1] == null? "" : element.c[1].v
        );

        console.log(getFileId == null ? "" : getFileId[1]);
        const newImgUrl =
          "https://drive.google.com/uc?export=view&id=" +
          (getFileId == null ? "" : getFileId[1]);

        galleryArr.push({
          src: newImgUrl,
          width: 300,
          height: 180,
          caption: element.c[2] == null ? "Tidak ada" : element.c[2].v.trim()
        });
      }
    });

  console.log(galleryArr)
}

export const images = [
  {
    src: "https://drive.google.com/uc?export=view&id=1HEhPUyMf4nBHWUlIsob-lMnCLc5aAtZd",
    width: 300,
    height: 180,
    caption: "Kebun Jagung"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1HEhPUyMf4nBHWUlIsob-lMnCLc5aAtZd",
    width: 300,
    height: 180,
    caption: "Kebun Jagung"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1HEhPUyMf4nBHWUlIsob-lMnCLc5aAtZd",
    width: 300,
    height: 180,
    caption: "Kebun Jagung"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1HEhPUyMf4nBHWUlIsob-lMnCLc5aAtZd",
    width: 300,
    height: 180,
    caption: "Kebun Jagung"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1HEhPUyMf4nBHWUlIsob-lMnCLc5aAtZd",
    width: 300,
    height: 180,
    caption: "Kebun Jagung"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1HEhPUyMf4nBHWUlIsob-lMnCLc5aAtZd",
    width: 300,
    height: 180,
    caption: "Kebun Jagung"
  },
  {
    src: "https://drive.google.com/uc?export=view&id=1HEhPUyMf4nBHWUlIsob-lMnCLc5aAtZd",
    width: 300,
    height: 180,
    caption: "Kebun Jagung"
  }
];

export const images2 = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212
  },
  {
    src: fotoKKN,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: umkm,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212
  },
  {
    src: fotoKKN,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: umkm,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212
  },
  {
    src: fotoKKN,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: umkm,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212
  },
  {
    src: fotoKKN,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: umkm,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212
  },
  {
    src: fotoKKN,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: umkm,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212
  },
  {
    src: fotoKKN,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: umkm,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    width: 320,
    height: 174,
    caption: "After Rain (Jeshu John - designerspics.com)"
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    width: 320,
    height: 212,
    alt: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    width: 320,
    height: 212
  },
  {
    src: fotoKKN,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: umkm,
    width: 300,
    height: 180,
    alt: "Boats (Jeshu John - designerspics.com)"
  }
];
