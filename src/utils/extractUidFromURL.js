function extractUidFromStorageURL(url) {
  const startIndex = url.lastIndexOf("%2F") + 3; // Find the index after the last occurrence of '%2F'
  const endIndex = url.indexOf("?"); // Find the index before the '?'

  if (startIndex !== -1 && endIndex !== -1) {
    const uuid = url.substring(startIndex, endIndex); // Extract the UUID between '%2F' and '?'
    return decodeURIComponent(uuid);
  }

  return null;
}

export default extractUidFromStorageURL;
