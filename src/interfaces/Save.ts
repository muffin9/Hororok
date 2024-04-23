export interface FolderType {
  folderId: number;
  name: string;
  color: string;
  bookmarkCount: number;
  visible: boolean;
  defaultFolder: boolean;
}

export interface BookMarksType {
  folderCount: number;
  folders: FolderType[];
}

export interface BookmarkType {
  cafeId: number;
  cafeName: string;
  roadAddress: string;
  latitude: number;
  longitude: number;
}

export interface FolderListType {
  folderId: number;
  folderName: string;
  folderColor: string;
  bookmarks: BookmarkType[];
}

export interface paramFolderType {
  folderId: number;
  name: string;
  color: string;
  isVisible: boolean;
}
