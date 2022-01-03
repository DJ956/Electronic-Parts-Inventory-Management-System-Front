import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-upload-photo-view',
  templateUrl: './upload-photo-view.component.html',
  styleUrls: ['./upload-photo-view.component.scss'],
})
export class UploadPhotoViewComponent implements OnInit {


  /**アップロードする製品画像リスト */
  imageList: string[];

  /**
   * 写真登録したbase64形式の画像リストを返す
   */
  @Output() uploadImageEmitter: EventEmitter<string[]>;

  constructor() {
    this.imageList = [];
    this.uploadImageEmitter = new EventEmitter<string[]>();
  }


  ngOnInit() { }


  /**
   * 画像を追加する
   * @param event 
   */
  onChangeImageInput(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageList.push(reader.result.toString());
      this.uploadImageEmitter.emit(this.imageList);
    };
  }

  /**
   * 選択した画像を削除する
   * @param index 
   */
  onClickDelImg(index: number) {
    let tmp: string[] = [];
    for (let i = 0; i < this.imageList.length; i++) {
      if (i === index) { continue; }
      tmp.push(this.imageList[i]);
    }

    this.imageList = tmp;
    this.uploadImageEmitter.next(this.imageList);
  }

}
