export interface FolderType {
  folderId: number;
  name: string;
  color: string;
  favoriteCount: number;
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
  color: string;
  bookmarks: BookmarkType[];
}

export interface paramFolderType {
  folderId: number;
  name: string;
  color: string;
  isVisible: boolean;
}
