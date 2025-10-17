// Google Apps Script for Piapuro Web
// このスクリプトをGoogle Apps Scriptエディタにコピーして使用してください

/**
 * Google DriveのリンクをWebビューアブルな直接リンクに変換
 * @param {string} url - Google DriveのURL
 * @return {string} - 変換後のURL
 */
function convertDriveLinkToDirect(url) {
  if (!url) return '';

  // 既に直接リンクの形式なら、そのまま返す
  if (url.indexOf('drive.google.com/uc?') !== -1) {
    return url;
  }

  // 共有リンクからファイルIDを抽出
  // 形式: https://drive.google.com/file/d/FILE_ID/view?usp=sharing
  var match = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);

  if (match && match[1]) {
    var fileId = match[1];
    return 'https://drive.google.com/uc?export=view&id=' + fileId;
  }

  // マッチしない場合は元のURLを返す
  return url;
}

/**
 * HTTPリクエストを処理するメインハンドラー
 * @param {Object} e - イベントオブジェクト
 * @return {Object} - レスポンス
 */
function doGet(e) {
  var type = e.parameter.type;

  if (type === 'works') {
    return getWorksData();
  } else if (type === 'activities') {
    return getActivitiesData();
  }

  return ContentService
    .createTextOutput(JSON.stringify({
      success: false,
      error: 'Invalid type parameter. Use "works" or "activities"'
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 作品一覧データを取得
 * @return {Object} - JSON形式のレスポンス
 */
function getWorksData() {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Works');

    if (!sheet) {
      throw new Error('Sheet "Works" not found');
    }

    var data = sheet.getDataRange().getValues();

    // ヘッダー行を除く
    var headers = data[0];
    var rows = data.slice(1);

    var works = [];

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];

      // 空行をスキップ
      if (!row[0]) continue;

      var work = {
        id: row[0] || i + 1,
        title: row[1] || '',
        artist: row[2] || '',
        category: row[3] || '',
        year: row[4] || '',
        description: row[5] || '',
        technology: row[6] || '',
        works: row[7] || '',
        image: convertDriveLinkToDirect(row[8] || '')
      };

      works.push(work);
    }

    // yearで降順（新しい順）にソート
    works.sort(function(a, b) {
      var yearA = parseInt(a.year) || 0;
      var yearB = parseInt(b.year) || 0;
      return yearB - yearA; // 降順
    });

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        data: works,
        count: works.length
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * 活動記録データを取得
 * @return {Object} - JSON形式のレスポンス
 */
function getActivitiesData() {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Activities');

    if (!sheet) {
      throw new Error('Sheet "Activities" not found');
    }

    var data = sheet.getDataRange().getValues();

    // ヘッダー行を除く
    var headers = data[0];
    var rows = data.slice(1);

    var activities = [];

    for (var i = 0; i < rows.length; i++) {
      var row = rows[i];

      // 空行をスキップ
      if (!row[0]) continue;

      var activity = {
        id: row[0] || i + 1,
        year: row[1] || '',
        title: row[2] || '',
        category: row[3] || '',
        description: row[4] || '',
        participants: Number(row[5]) || 0,
        active: row[6] || '',
        image: convertDriveLinkToDirect(row[7] || '')
      };

      activities.push(activity);
    }

    // yearで降順（新しい順）にソート（日付形式 YYYY/MM/DD に対応）
    activities.sort(function(a, b) {
      var dateA = new Date(a.year || '1970/01/01');
      var dateB = new Date(b.year || '1970/01/01');
      return dateB.getTime() - dateA.getTime(); // 降順
    });

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        data: activities,
        count: activities.length
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * テスト用: スプレッドシートのシート名一覧を取得
 */
function listSheets() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheets = ss.getSheets();

  Logger.log('Available sheets:');
  for (var i = 0; i < sheets.length; i++) {
    Logger.log('- ' + sheets[i].getName());
  }
}

/**
 * テスト用: Worksシートのデータを確認
 */
function testWorksData() {
  var result = getWorksData();
  Logger.log(result.getContent());
}

/**
 * テスト用: Activitiesシートのデータを確認
 */
function testActivitiesData() {
  var result = getActivitiesData();
  Logger.log(result.getContent());
}
