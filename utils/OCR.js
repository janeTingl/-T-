import * as ImagePicker from 'expo-image-picker';
import { matchQuestion } from './helpers';

export async function recognizeAndMatch() {
  let result = await ImagePicker.launchCameraAsync({
    allowsEditing: false,
    quality: 1,
  });

  if (!result.canceled && result.assets && result.assets.length > 0) {
    const uri = result.assets[0].uri;

    // 调用 OCR API 识别图片文字（这里可以接入真实 OCR）
    const ocrText = await recognizeTextFromImage(uri); // 示例方法

    // 匹配题库
    const matched = await matchQuestion(ocrText);

    if (matched.question) {
      return `题目：${matched.question}\n答案：${matched.answer}`;
    } else {
      return '未找到匹配题目，请重试或手动输入题目';
    }
  }
  return null;
}

// 示例 OCR 识别方法（可替换为真实 API）
async function recognizeTextFromImage(uri) {
  console.log('识别图片路径:', uri);
  // 这里返回示例文本
  return '计算 12 + 8 的结果是多少？';
}
