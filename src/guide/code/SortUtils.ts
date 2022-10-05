import { Lesson } from "@/models/ContentsModel";
import ContentsManager from "./ContentsManager";

export default class SortUtils {

    /**
     * 表示する特集のソート
     * 2022/07/27 特集の表示開始日で昇順ソートを廃止、FY22の8月号リリースまでと同じく並び順の昇順ソートに変更
     */
    public static specialfeatureMovieCategoriesSort(specialfeatureMovieCategories: Lesson[]) {
        specialfeatureMovieCategories.sort((a, b) =>
            ContentsManager.instance.compareNumber(a.specialFeatureMovieSortNumber ? a.specialFeatureMovieSortNumber : 0,
                b.specialFeatureMovieSortNumber ? b.specialFeatureMovieSortNumber : 0));
    }
}