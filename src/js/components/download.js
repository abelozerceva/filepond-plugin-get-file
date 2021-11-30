/**
 * Register the download component by inserting the download icon
 */
export const registerDownloadComponent = (item, el, labelButtonDownload, allowDownloadByUrl) => {
    const info = el.querySelector('.filepond--file-info-main'),
          downloadIcon = getDownloadIcon(labelButtonDownload, item, allowDownloadByUrl);

    info.prepend(downloadIcon);
}

/**
 * Generates the download icon
 */
export const getDownloadIcon = (labelButtonDownload, item, allowDownloadByUrl) => {
	let link = document.createElement('a');
	let icon = document.createElement('span');
	icon.className = 'filepond--download-icon';
	icon.title = labelButtonDownload;
	if (allowDownloadByUrl && item.getMetadata('url')) {
		link.href = item.getMetadata('url');
	} else {
		link.href = window.URL.createObjectURL(item.file);
		link.download = item.file.name;
	}
	link.appendChild(icon);
	return link;
}
