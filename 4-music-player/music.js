class Music {
    constructor(title, singer, img, file) {
        this.title = title;
        this.singer = singer;
        this.img = img;
        this.file = file;
    }

    getName() {
        return this.title + " - " + this.singer;
    }
}


const musicList = [
    new Music("Boşver", "Nilüfer","1.jpeg","1.mp3"),    
    new Music("Bu da Geçer mi Sevgilim", "Yalın","2.jpeg","2.mp3"),    
    new Music("Aramızda Uçurumlar", "Suat Suna","3.jpeg","3.mp3"),
    new Music("Arıyorum","Edis","4.jpg","4.mp3"),
    new Music("Ela","Reynmen","5.jpg","5.mp3"),
    new Music("Humbleness","Mark Eliyahu", "6.jpg","6.mp3")

];





 