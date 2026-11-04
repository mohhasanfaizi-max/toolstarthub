import type { ToolGuide } from "./index.ts";
import { toolGuideArticle } from "./make.ts";

const PUBLISHED = "2026-11-04T16:00:00Z";

const imageResizer: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-resize-an-image",
    title: "How to Resize an Image to Exact Pixel Dimensions",
    primaryKeyword: "resize an image",
    secondaryKeywords: ["resize image to pixels", "keep aspect ratio", "change image dimensions", "make a photo smaller", "resize jpg png webp"],
    toolSlug: "image-resizer",
    siblingToolSlugs: ["image-cropper", "image-compressor", "aspect-ratio-calculator"],
    metaTitle: "How to Resize an Image: Pixels, Aspect Ratio and File Size",
    metaDescription:
      "Resize a JPG, PNG or WebP to an exact width and height without stretching it. How aspect ratio works, when to crop instead, and what happens to file size.",
    excerpt:
      "Pick a width, let the height follow, and download a new JPG, PNG or WebP. This guide explains the pixel maths, when resizing helps file size, and when you should crop first.",
    relatedArticles: ["how-to-calculate-an-aspect-ratio", "how-to-compress-an-image-without-losing-quality", "how-to-crop-an-image"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open the Image Resizer, choose a JPG, PNG or WebP file, and type the new width in pixels. With Lock aspect ratio on, the height is calculated for you so the picture is not stretched. Pick JPG, PNG or WebP as the output, resize, and download the new file. Both sides can be anywhere from 1 to 8,192 pixels, and the image never leaves your browser.",
    why:
      "Websites, forms, marketplaces and email clients often expect images of a certain width, or reject files that are too large. A phone photo can be 4,000 pixels wide or more, far bigger than most pages display. Resizing to the size you actually need makes pages load faster, uploads succeed, and attachments smaller, without changing what the picture shows.",
    sections: [
      {
        id: "pixels",
        heading: "What does resizing an image actually change?",
        paragraphs: [
          "A digital image is a grid of pixels. A photo that is 4,000 by 3,000 pixels has 12 million of them. Resizing creates a new grid at the size you choose and redraws the picture into it. Shrinking merges neighbouring pixels, so fine detail is averaged away. Enlarging spreads the existing pixels over more space, so the result can look soft.",
          "Resizing is different from cropping. Resizing keeps the whole scene and changes how many pixels describe it. Cropping cuts away the edges and keeps the remaining pixels as they were. If you need a different shape, such as a square from a landscape photo, crop first and then resize.",
        ],
      },
      {
        id: "aspect-ratio",
        heading: "How do I resize without stretching the picture?",
        paragraphs: [
          "Keep the aspect ratio, which is the relationship between width and height. A 4,000 by 3,000 photo has a 4:3 ratio. If you make it 1,200 pixels wide, the matching height is 1,200 × 3,000 ÷ 4,000 = 900 pixels.",
          "With Lock aspect ratio switched on, the tool does that calculation whenever you change one side, and rounds to the nearest whole pixel. Switch it off only when you deliberately want to force a shape. A 4:3 photo forced into a 1,000 by 1,000 square will look squashed sideways, because the content is stretched rather than trimmed.",
        ],
        table: {
          caption: "Matching heights for a 4,000 × 3,000 photo with the ratio locked",
          headers: ["New width", "Calculated height", "Typical use"],
          rows: [
            ["2,000 px", "1,500 px", "Full-width image on a large screen"],
            ["1,200 px", "900 px", "Blog or article image"],
            ["800 px", "600 px", "Email or document"],
            ["400 px", "300 px", "Thumbnail or preview"],
          ],
        },
      },
      {
        id: "file-size",
        heading: "Will a smaller image have a smaller file size?",
        paragraphs: [
          "Usually, yes. Fewer pixels means less data to store, so halving both the width and the height leaves a quarter of the pixels. The exact saving depends on the content and the format, and the tool shows the original and output sizes so you can compare.",
          "The output is always a fresh encode. JPG and WebP are saved at a fixed quality of 90, which keeps photos looking clean. PNG is lossless, so a large PNG photo can stay big even after resizing. If the file is still too heavy, run it through the Image Compressor afterwards, where you can lower the quality yourself.",
        ],
      },
      {
        id: "format",
        heading: "Which output format should I choose?",
        paragraphs: [
          "Choose JPG for photographs that will be shared widely, because almost everything can open it. Choose PNG for screenshots, logos, diagrams and anything with sharp edges or transparency. Choose WebP when the image is going on a website and you want small files with good quality.",
          "One detail to watch: JPG cannot store transparency. If you resize a PNG logo with a transparent background and save it as JPG, the transparent areas are filled with white. Keep PNG or WebP output if the transparency matters.",
        ],
      },
      {
        id: "upscaling",
        heading: "Can I make a small image bigger?",
        paragraphs: [
          "You can enter a larger size, up to 8,192 pixels a side, and the tool will produce it. What it cannot do is invent detail that was never captured. A 300-pixel logo enlarged to 1,200 pixels will look blurry or blocky around the edges. For sharp large images, go back to the original file, a higher-resolution export, or a vector version of a logo.",
        ],
      },
      {
        id: "limits",
        heading: "What are the limits and privacy details?",
        paragraphs: [
          "The tool accepts JPG, PNG and WebP files up to 25 MB, with each side of the original at 8,192 pixels or smaller. Everything is drawn on a canvas inside your browser tab, so the photo is not uploaded. Because the image is redrawn, camera metadata such as EXIF details is not copied into the new file, which is also a quiet privacy bonus when sharing photos.",
          "Animated images are not supported, and the downloaded name is your original name with “-resized” added, so you will not overwrite the source by accident.",
        ],
      },
      {
        id: "targets",
        heading: "What size should I resize to for common uses?",
        paragraphs: [
          "Start from where the image will be shown. A blog or documentation page usually displays images somewhere between 700 and 1,200 pixels wide, so a width in that range is plenty. Email newsletters are often designed around a column of about 600 pixels. Thumbnails and avatars are much smaller still.",
          "High-density phone and laptop screens pack more pixels into the same space, which is why many sites serve images at up to twice the displayed width. Going beyond that rarely adds visible sharpness but does add weight.",
          "When an upload form names exact dimensions, such as a marketplace asking for a square image, use those numbers. If the shape does not match your photo, decide whether you would rather crop or add space around it before resizing, because forcing a different ratio distorts the picture.",
        ],
      },
      {
        id: "print-dpi",
        heading: "Does DPI matter when I resize?",
        paragraphs: [
          "Screens care only about pixel dimensions. DPI, or dots per inch, is a print setting that tells a printer how large to make those pixels on paper. Changing it without changing the pixels does not make an image sharper.",
          "For print, work backwards from the paper size. A 6 × 4 inch print at 300 dots per inch needs about 1,800 × 1,200 pixels. If your file is smaller than that, the print may look soft, and resizing up will not add real detail.",
        ],
      },
    ],
    stepsHeading: "How to resize an image online",
    steps: [
      { title: "Choose the image", body: "Select or drop a JPG, PNG or WebP file. The tool shows the original width, height, file size and name." },
      { title: "Enter the new size", body: "Type a width or height in pixels. Keep Lock aspect ratio on to have the other side calculated, or switch it off to set both yourself." },
      { title: "Pick the output format", body: "Choose JPG, PNG or WebP. JPG is the default and suits most photos." },
      { title: "Resize and download", body: "Run the resize, check the new dimensions and output size, and download the file with “-resized” in its name." },
    ],
    examples: [
      { title: "A phone photo for a blog post", body: "A 4,032 × 3,024 photo is resized to 1,200 pixels wide with the ratio locked. The height becomes 900 pixels, and the JPG output is far lighter than the original camera file." },
      { title: "A profile picture that must be square", body: "The source is 1,600 × 1,200. Forcing 400 × 400 would distort a face, so crop a 1:1 square in the Image Cropper first, then resize the square to 400 × 400." },
      { title: "A transparent logo for a website", body: "A 2,000-pixel PNG logo is resized to 500 pixels wide and kept as PNG, so the transparent background survives. Saving it as JPG would put it on white." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "Resize from the original", body: "Each resize redraws the image. Starting again from the original each time gives better results than resizing an already-resized copy." },
      { heading: "Know the display size", body: "If a page shows an image at 800 pixels wide, a 4,000-pixel file wastes bandwidth. Allow up to twice the display width for sharp screens." },
      { heading: "Use the Aspect Ratio Calculator for planning", body: "When a platform gives you a ratio rather than a size, work out the pixel pair there and type it in here." },
    ],
    faqs: [
      { question: "What is the largest size I can resize to?", answer: "Each side can be up to 8,192 pixels. The smallest allowed size is 1 pixel." },
      { question: "Why did my height change on its own?", answer: "Lock aspect ratio is on, so the height follows the width to keep the picture in proportion. Switch it off to set both values freely." },
      { question: "Does resizing remove EXIF data such as location?", answer: "The new file is redrawn from the pixels, so camera metadata is not copied into it. Keep the original if you need that information." },
      { question: "Why is my resized PNG still large?", answer: "PNG is lossless and stores every pixel exactly. For photos, choose JPG or WebP output, or compress the PNG afterwards." },
      { question: "Can I resize several images at once?", answer: "No. The tool handles one image at a time, which keeps the browser responsive." },
      { question: "What JPG quality does the resizer use?", answer: "JPG and WebP outputs are saved at quality 90. Use the Image Compressor if you want to set a lower quality." },
      { question: "Can I resize by percentage?", answer: "Not directly. Multiply the original width by your percentage, type the result as the width, and let the locked ratio set the height." },
      { question: "Does it work with HEIC or GIF files?", answer: "No. It accepts JPG, PNG and WebP. Convert other formats on your device first." },
      { question: "Will enlarging a photo make it sharper?", answer: "No. Enlarging spreads existing pixels over a bigger grid, so it usually looks softer, not sharper." },
      { question: "What will the downloaded file be called?", answer: "Your original file name with “-resized” added and the extension of the format you chose, such as holiday-resized.jpg." },
    ],
    faqMax: 10,
    cta: { before: "Resize a photo to the exact size you need with the free", linkLabel: "Image Resizer", href: "/tools/image-resizer", after: "." },
    alsoSee: [
      { before: "To change the shape before resizing, use the", linkLabel: "Image Cropper", href: "/tools/image-cropper", after: "." },
      { before: "To shrink the file further, try the", linkLabel: "Image Compressor", href: "/tools/image-compressor", after: "." },
    ],
  },
};

const imageCropper: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-crop-an-image",
    title: "How to Crop an Image to a Square, 4:3 or 16:9 Frame",
    primaryKeyword: "crop an image",
    secondaryKeywords: ["crop photo to square", "crop to 16:9", "crop image online", "crop picture without app", "free crop"],
    toolSlug: "image-cropper",
    siblingToolSlugs: ["image-resizer", "aspect-ratio-calculator", "image-compressor"],
    metaTitle: "How to Crop an Image: Square, 4:3, 16:9 and Free Crops",
    metaDescription:
      "Crop a JPG, PNG or WebP by dragging a frame, or lock it to 1:1, 4:3 or 16:9. Framing tips, keyboard nudging, and how cropping affects size and quality.",
    excerpt:
      "Drag a box over the part you want to keep, lock the shape if you need one, and download just those pixels. Here is how to frame well and what the numbers on screen mean.",
    relatedArticles: ["how-to-resize-an-image", "how-to-calculate-an-aspect-ratio", "how-to-compress-an-image-without-losing-quality"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open the Image Cropper, choose a JPG, PNG or WebP image, and drag the crop box over the part you want to keep. Pick Free for any shape, or 1:1, 4:3 or 16:9 to lock the frame. Drag the handles to resize the box, use the arrow keys to nudge it, choose the output format, and download. Only the pixels inside the box are saved, and the photo stays in your browser.",
    why:
      "Cropping removes distractions, straightens the focus onto a subject, and fits a picture into the shape a profile, slide or video thumbnail expects. It is the right tool whenever the problem is what is in the frame rather than how many pixels the frame has.",
    sections: [
      {
        id: "crop-vs-resize",
        heading: "What is the difference between cropping and resizing?",
        paragraphs: [
          "Cropping cuts the picture. The part you keep is saved at its original pixel detail, and everything outside the box is discarded. Resizing keeps the whole picture and changes its pixel dimensions.",
          "That is why a crop from a large photo can still look sharp, while a tiny crop from a small photo will be small. If you crop a 300 × 300 area, the output is 300 × 300 pixels. Resize it afterwards if you need a specific size.",
        ],
      },
      {
        id: "ratios",
        heading: "Which aspect ratio should I choose?",
        paragraphs: [
          "The ratio describes the shape of the box. The tool offers four choices. When you switch ratio, the box is redrawn at the largest size that fits within about 90 percent of the image and is centred, ready for you to move.",
        ],
        table: {
          caption: "Crop frames in the tool and common uses",
          headers: ["Frame", "Shape", "Common uses"],
          rows: [
            ["Free", "Any width and height", "Removing an edge, isolating a detail, screenshots"],
            ["1:1", "Square", "Profile pictures, product grids, social posts"],
            ["4:3", "Slightly wider than tall", "Classic camera photos, presentations with a 4:3 layout"],
            ["16:9", "Widescreen", "Video thumbnails, banners, widescreen slides"],
          ],
        },
        after:
          "Platforms change their recommended sizes from time to time, so check the current help page of the site you are posting to. If it gives a pixel size rather than a ratio, the Aspect Ratio Calculator will tell you which shape it is.",
      },
      {
        id: "moving",
        heading: "How do I move and adjust the crop box precisely?",
        paragraphs: [
          "Drag inside the box to move it, and drag any of the eight handles on the corners and edges to change its size. With a fixed ratio, the box keeps its shape while you resize. Mouse and touch both work, so you can crop on a phone.",
          "For fine control, focus the box and use the arrow keys. Each press moves it by 1 pixel, or by 10 pixels while holding Shift. The panel above the preview shows the crop size and its position from the top-left corner, measured in the original image’s pixels, not the shrunken preview.",
        ],
      },
      {
        id: "framing",
        heading: "How do I frame a better crop?",
        paragraphs: [
          "Leave some breathing room. Cropping tightly against a face or product edge tends to feel cramped, especially when a site later adds a rounded or circular mask. For profile pictures, centre the face and leave space above the head.",
          "Look at where the subject faces. A person looking right usually sits better in the left part of the frame, with space in front of them. Horizons look calmer when they are not cut through the exact middle of a picture.",
          "Check the edges for things you did not mean to keep, such as half a sign, a stray elbow or a sliver of another photo in a screenshot. Those are easier to spot when you look at the output preview rather than the full image.",
        ],
      },
      {
        id: "quality",
        heading: "Does cropping lower quality or file size?",
        paragraphs: [
          "Cropping keeps the original detail in the area you choose, but the result is saved as a new file. JPG and WebP outputs are encoded at quality 90, which keeps them visually clean. PNG output is lossless.",
          "The file size usually drops because there are fewer pixels. The result panel shows the cropped dimensions and file size so you can check before downloading. JPG output cannot keep transparency, so transparent areas in a PNG are filled with white if you choose JPG.",
        ],
      },
      {
        id: "before-after",
        heading: "Should I crop before or after other edits?",
        paragraphs: [
          "Crop first in most cases. Cropping removes the pixels you do not need, so any later resizing, compression or format conversion works on a smaller image and finishes faster. It also means the resized output is based on the framing you chose, rather than a smaller copy of the whole scene.",
          "The main exception is when you are building several crops from one photo, such as a square avatar and a wide banner. Keep the original untouched and make each crop separately from it, rather than cropping a crop. Each pass is saved as a new file, so starting from the original keeps the best possible detail.",
        ],
      },
      {
        id: "composition",
        heading: "How do I crop for a specific platform?",
        paragraphs: [
          "Decide on the shape first, then the content. A wide 16:9 frame works for video thumbnails and slides, where text or a logo often sits alongside the subject. A square suits product grids and profile images, which many sites display small. A 4:3 frame is a comfortable middle ground for articles and documents.",
          "Think about what the platform overlays. Profile pictures are often shown in a circle, so anything in the corners of a square crop may be hidden. Video thumbnails may have a duration label in a corner. Keep the important part of the image clear of those areas.",
          "If you are unsure, preview the crop at the size it will be seen. A detail that is obvious at full size can disappear in a 100-pixel thumbnail, which is a good reason to crop tighter for small placements.",
        ],
      },
      {
        id: "privacy",
        heading: "Can cropping hide private information?",
        paragraphs: [
          "Cropping does discard the pixels outside the box, so details that were cut away, such as a name in a screenshot margin, are not present in the downloaded file. The original on your device still has them, so share only the cropped copy. Camera metadata is not copied into the new file either, because the crop is redrawn from pixels. Check the preview carefully before sharing, since anything inside the box remains visible.",
        ],
      },
    ],
    stepsHeading: "How to crop an image online",
    steps: [
      { title: "Choose the image", body: "Select a JPG, PNG or WebP up to 25 MB, with each side no more than 8,192 pixels." },
      { title: "Pick a frame", body: "Choose Free, 1:1, 4:3 or 16:9. The box appears centred on the picture." },
      { title: "Position the box", body: "Drag to move, pull the handles to resize, and use the arrow keys for small adjustments. Watch the size and position readout." },
      { title: "Crop and download", body: "Choose JPG, PNG or WebP, run the crop, check the preview, and download the file with “-cropped” in its name." },
    ],
    examples: [
      { title: "A square profile picture", body: "From a 3,000 × 2,000 group photo, select 1:1, shrink the box around one face, and crop. The output is a square at whatever size the box covered, for example 800 × 800." },
      { title: "A widescreen thumbnail", body: "Choose 16:9 on a landscape photo and move the box so the subject sits in the left half, leaving room for a title on the right." },
      { title: "Trimming a screenshot", body: "Use Free to cut away a browser toolbar and taskbar. Save as PNG so the text stays crisp." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "No rotation or filters", body: "The cropper only cuts. Rotate or straighten images in your photo app first." },
      { heading: "Minimum size", body: "The crop box cannot be made smaller than 8 pixels on a side." },
      { heading: "Crop then resize", body: "For an exact target such as 1080 × 1080, crop with 1:1 and then set the size in the Image Resizer." },
    ],
    faqs: [
      { question: "How do I crop a photo into a perfect square?", answer: "Select the 1:1 frame. The box stays square as you move and resize it." },
      { question: "Can I type exact crop coordinates?", answer: "No. Drag the box and use the arrow keys, then read the exact size and position shown above the preview." },
      { question: "How do I nudge the crop box by one pixel?", answer: "Focus the box and press an arrow key. Hold Shift to move 10 pixels at a time." },
      { question: "Why is my cropped image smaller than expected?", answer: "The output keeps the pixels inside the box, so a small box gives a small image. Use a larger source photo for larger crops." },
      { question: "Can I crop to a custom ratio such as 4:5?", answer: "There is no 4:5 preset. Use Free and size the box by eye, then adjust the exact size afterwards in the Image Resizer." },
      { question: "Will my PNG keep its transparent background?", answer: "Yes, if you save as PNG or WebP. JPG output fills transparent areas with white." },
      { question: "What does the position readout mean?", answer: "It shows how far the box’s top-left corner is from the image’s top-left corner, in original image pixels." },
      { question: "Can I undo a crop?", answer: "The original file is not changed. Move the box and crop again, or reset to start over." },
      { question: "Which file types can I crop?", answer: "JPG, PNG and WebP, up to 25 MB and 8,192 pixels on each side." },
      { question: "What is the downloaded file called?", answer: "Your original name with “-cropped” added, ending in the extension of the format you picked." },
    ],
    faqMax: 10,
    cta: { before: "Frame your picture with the free", linkLabel: "Image Cropper", href: "/tools/image-cropper", after: "." },
    alsoSee: [
      { before: "To set an exact pixel size after cropping, use the", linkLabel: "Image Resizer", href: "/tools/image-resizer", after: "." },
      { before: "To check a shape before cropping, try the", linkLabel: "Aspect Ratio Calculator", href: "/tools/aspect-ratio-calculator", after: "." },
    ],
  },
};

const imageConverter: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-convert-jpg-to-png-and-png-to-jpg",
    title: "How to Convert JPG to PNG and PNG to JPG",
    primaryKeyword: "convert jpg to png",
    secondaryKeywords: ["convert png to jpg", "png transparency to jpg", "jpg vs png", "change image format", "background color for transparent png"],
    toolSlug: "image-converter",
    siblingToolSlugs: ["image-compressor", "image-resizer", "image-to-pdf"],
    metaTitle: "How to Convert JPG to PNG and PNG to JPG (With Transparency)",
    metaDescription:
      "Switch an image between JPG and PNG in your browser. What changes in quality and file size, and how to choose the fill colour for transparent areas.",
    excerpt:
      "JPG and PNG store pictures in very different ways. This guide shows how to convert between them, what each direction does to size and quality, and how transparency is handled.",
    relatedArticles: ["how-to-compress-an-image-without-losing-quality", "how-to-resize-an-image", "how-to-make-a-simple-favicon"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open the Image Converter and choose a JPG or PNG file. The tool picks the opposite direction for you: JPG → PNG for a JPG, or PNG → JPG for a PNG. When converting to JPG, pick a background colour for any transparent areas, white by default. Convert, check the output size, and download. The pixels and dimensions stay the same; only the file format changes.",
    why:
      "Sites and apps often accept only one format. A form may demand a JPG, a design tool may want a PNG, and a print shop may ask for one or the other. Converting is quicker than reopening the picture in an editor, and knowing what each format does saves you from bloated files or lost transparency.",
    sections: [
      {
        id: "difference",
        heading: "How do JPG and PNG store images differently?",
        paragraphs: [
          "JPG uses lossy compression. It throws away fine detail the eye is unlikely to miss, which makes photographs small. The cost shows up on sharp edges and flat colours, where you may see faint blotches or halos around text.",
          "PNG uses lossless compression. Every pixel is kept exactly, and the format supports transparency. That makes it ideal for logos, icons, screenshots and diagrams, but photographs saved as PNG are usually much larger than the same photo as JPG.",
        ],
        table: {
          caption: "JPG and PNG compared",
          headers: ["", "JPG", "PNG"],
          rows: [
            ["Compression", "Lossy", "Lossless"],
            ["Transparency", "Not supported", "Supported"],
            ["Best for", "Photos", "Graphics, text, screenshots, logos"],
            ["Typical size for a photo", "Smaller", "Larger"],
          ],
        },
      },
      {
        id: "jpg-to-png",
        heading: "What happens when I convert JPG to PNG?",
        paragraphs: [
          "The picture is decoded and saved again without further loss. That stops the image from degrading if you plan to edit and resave it many times. It does not restore detail the original JPG already discarded, and it does not add a transparent background; the white or coloured background in the photo is still there as ordinary pixels.",
          "Expect the file to grow, often noticeably for photos. That is normal, because PNG records every pixel exactly. Convert to PNG when a tool or workflow needs PNG, not as a way to improve quality.",
        ],
      },
      {
        id: "png-to-jpg",
        heading: "What happens when I convert PNG to JPG?",
        paragraphs: [
          "The image is re-encoded as a JPG at quality 90. Photos usually become much smaller with little visible change. Graphics with text or hard lines may show slight softening, so zoom into the preview before using the result.",
          "Transparency is the important part. JPG has no transparent pixels, so every transparent or semi-transparent area is placed on top of a solid colour. The tool uses white unless you choose another colour with the picker or type a six-digit hex code such as #000000. Pick the colour of the page or slide where the image will appear, so the edges blend in.",
        ],
      },
      {
        id: "which",
        heading: "When is it worth converting at all?",
        paragraphs: [
          "Convert PNG photos to JPG when you need smaller files for email, upload limits or web pages. Convert JPG to PNG when software insists on PNG, or before a series of edits so each save does not lose more detail.",
          "If a site accepts both formats, keep whatever you have unless size or transparency is a problem. Converting back and forth repeatedly gains nothing, and each trip through JPG compression can lose a little more detail.",
        ],
      },
      {
        id: "privacy",
        heading: "What files does the converter accept, and is it private?",
        paragraphs: [
          "It accepts JPG and PNG files up to 25 MB, with each side no larger than 8,192 pixels. WebP and other formats are rejected by this page. The conversion runs on a canvas inside your browser, so the image is not uploaded, and because the picture is redrawn, camera metadata is not carried over to the new file.",
        ],
      },
      {
        id: "text-graphics",
        heading: "Which format keeps text and screenshots sharp?",
        paragraphs: [
          "PNG. Screenshots, charts, user interface mockups and scanned forms are full of hard edges and flat colours. JPG compression is designed for the gradual changes of a photograph, so around crisp letters it tends to create a faint fuzzy halo. At quality 90 the effect is small, but it can still be visible on small type.",
          "If a site forces JPG for a screenshot, convert it and zoom into the preview to check that the important text is readable. Cropping away parts you do not need first will also make the file smaller without lowering quality.",
        ],
      },
      {
        id: "colour",
        heading: "Will converting change the colours?",
        paragraphs: [
          "Usually not in any noticeable way. The picture is decoded by your browser and drawn onto a canvas before being saved in the new format, so the colours you see in the preview are the colours in the output. Very fine gradients in a PNG may pick up slight banding or blockiness when saved as JPG, which is part of lossy compression.",
          "Images prepared for professional printing sometimes use colour profiles or modes that browsers handle differently from design software. If exact colour matters for print, do the conversion in the software that created the file and check a proof.",
        ],
      },
      {
        id: "names",
        heading: "How is the converted file named?",
        paragraphs: [
          "The download keeps your original name, adds “-converted” and switches the extension, so photo.png becomes photo-converted.jpg. Unusual characters in the name are replaced with hyphens. The original stays untouched on your device, so you can always go back to it.",
        ],
      },
      {
        id: "web",
        heading: "Which format is better for a website?",
        paragraphs: [
          "For photos on a web page, JPG is usually the lighter option, which helps pages load faster on mobile connections. For logos, icons and interface graphics, PNG keeps edges clean and supports transparency. Many sites also use WebP, which can be smaller than both; this converter does not output WebP, but the Image Resizer can save a picture as WebP when you also want to change its size.",
          "Whatever you choose, make sure the pixel dimensions match how large the image is displayed. An oversized PNG converted to JPG is smaller, but resizing it to the right width often saves far more.",
        ],
      },
    ],
    stepsHeading: "How to convert an image between JPG and PNG",
    steps: [
      { title: "Choose a JPG or PNG", body: "Select the file. The tool shows its name, size and dimensions and selects the opposite format." },
      { title: "Check the direction", body: "Confirm JPG → PNG or PNG → JPG. You can switch the direction if needed." },
      { title: "Set a background for JPG", body: "When saving as JPG, choose the colour that will replace transparent pixels. White is the default." },
      { title: "Convert and download", body: "Run the conversion, compare the output size with the original, and download the file with “-converted” in its name." },
    ],
    examples: [
      { title: "A transparent logo for a dark slide", body: "A PNG logo with a transparent background must be a JPG. Choose PNG → JPG and set the background to the slide colour, for example #1a1a1a, so no white box appears around it." },
      { title: "A screenshot PNG that is too big to email", body: "A 3 MB PNG screenshot of a photo-heavy web page is converted to JPG at quality 90 and becomes much smaller. Zoom in on small text in the preview to check it is still readable." },
      { title: "A JPG that an editor requires as PNG", body: "A design app only imports PNG. Convert JPG → PNG. The picture looks the same, and the file is larger because PNG is lossless." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "Dimensions do not change", body: "The converter keeps the same width and height. Use the Image Resizer for a new size." },
      { heading: "No removing backgrounds", body: "Converting to PNG does not make a solid background transparent; that needs an editing tool." },
      { heading: "Need a smaller JPG?", body: "The converter uses a fixed quality. The Image Compressor lets you choose a lower quality for a smaller file." },
    ],
    faqs: [
      { question: "Does converting JPG to PNG improve image quality?", answer: "No. It stops further loss when you edit and resave, but detail already removed by JPG compression does not come back." },
      { question: "Why is my PNG bigger than the JPG I started with?", answer: "PNG stores every pixel exactly, while JPG discards detail to save space. Photos are usually larger as PNG." },
      { question: "Can I choose a black background instead of white?", answer: "Yes. When converting to JPG, use the colour picker or type a hex code such as #000000." },
      { question: "Will converting to PNG remove the white background?", answer: "No. The white background in a JPG is part of the picture and stays white in the PNG." },
      { question: "Can I convert WebP files here?", answer: "No. This converter accepts JPG and PNG only. The Image Resizer can read WebP and save it as JPG or PNG at a chosen size." },
      { question: "What JPG quality is used?", answer: "JPG output is saved at quality 90, which keeps photos visually clean." },
      { question: "Does the image keep the same pixel size?", answer: "Yes. The width and height of the converted image match the original." },
      { question: "Is camera metadata kept?", answer: "No. The image is redrawn, so EXIF details such as camera model and location are not copied." },
      { question: "Can I convert many files at once?", answer: "No. Convert one image at a time." },
      { question: "What is the largest file I can convert?", answer: "Up to 25 MB, with each side 8,192 pixels or smaller." },
    ],
    faqMax: 10,
    cta: { before: "Switch formats in seconds with the free", linkLabel: "Image Converter", href: "/tools/image-converter", after: "." },
    alsoSee: [
      { before: "To shrink a JPG further, use the", linkLabel: "Image Compressor", href: "/tools/image-compressor", after: "." },
      { before: "To turn images into a document, try", linkLabel: "Image to PDF", href: "/tools/image-to-pdf", after: "." },
    ],
  },
};

const pdfToJpg: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-convert-pdf-pages-to-jpg",
    title: "How to Convert PDF Pages to JPG Images",
    primaryKeyword: "convert pdf to jpg",
    secondaryKeywords: ["pdf page to image", "save pdf as jpg", "pdf to jpg quality", "export one pdf page as image", "pdf to picture"],
    toolSlug: "pdf-to-jpg",
    siblingToolSlugs: ["pdf-splitter", "image-to-pdf", "pdf-page-counter"],
    metaTitle: "How to Convert PDF Pages to JPG: Pages, Quality and Resolution",
    metaDescription:
      "Turn one page, chosen pages or a whole PDF into JPG images in your browser. How quality and resolution work, file naming, and what to do with long PDFs.",
    excerpt:
      "A JPG of a PDF page is easy to post, paste or preview anywhere. This guide covers choosing pages, setting quality, the resolution you get, and how to handle larger documents.",
    relatedArticles: ["how-to-work-with-pdfs-in-your-browser", "how-to-count-pdf-pages", "how-to-turn-a-word-document-into-a-pdf"],
    category: "image-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open PDF to JPG, choose a PDF up to 20 MB and 40 pages, and pick First page, Selected pages or All pages. Set the JPG quality slider (80 by default), press Convert, and download each page as its own JPG, or use Download all. Every page is drawn in your browser, so the PDF is not uploaded.",
    why:
      "A PDF needs a viewer, but a JPG shows up almost everywhere: chat apps, social posts, slides, web pages and image galleries. Converting a page to an image is the quickest way to share a single chart, certificate, flyer or receipt without sending the whole document.",
    sections: [
      {
        id: "how-it-works",
        heading: "How does a PDF page become a JPG?",
        paragraphs: [
          "A PDF describes a page with text, shapes and embedded pictures. To make a JPG, the tool renders, or draws, that page onto a canvas, the way a viewer draws it on screen, and then saves the canvas as a JPG. A white background is filled in first, so transparent areas in the page come out white.",
          "The result is a flat picture. Text inside it is no longer selectable or searchable, links stop being clickable, and form fields become part of the image. If you need the words themselves, use PDF to Text instead.",
        ],
      },
      {
        id: "resolution",
        heading: "What resolution will my JPG have?",
        paragraphs: [
          "Each page is rendered at 1.5 times its PDF size. PDF sizes are measured in points, with 72 points to an inch, so the output works out to about 108 pixels per inch of paper. A page that is very large is scaled down so its longest edge stays at 4,096 pixels or less.",
        ],
        table: {
          caption: "Approximate output size for common page sizes",
          headers: ["Page size", "PDF size in points", "JPG size in pixels"],
          rows: [
            ["US Letter, portrait", "612 × 792", "about 918 × 1,188"],
            ["A4, portrait", "595 × 842", "about 893 × 1,263"],
            ["A5, portrait", "420 × 595", "about 630 × 893"],
          ],
        },
        after:
          "That is comfortable for reading on screens and for sharing online. It is not a print-resolution scan, so for professional printing ask for the original PDF or vector artwork instead.",
      },
      {
        id: "quality",
        heading: "What JPG quality setting should I use?",
        paragraphs: [
          "The slider runs from 10 to 100 and starts at 80. Higher values keep text edges and gradients cleaner but make larger files. Lower values shrink files but add blur and blotches, especially around small type.",
          "For text-heavy pages, stay at 80 or above so letters remain crisp. For photo-heavy pages shared in chat, 60 to 80 is often fine. Try one page first, open it at full size, and adjust before converting the rest.",
        ],
      },
      {
        id: "pages",
        heading: "How do I choose which pages to convert?",
        paragraphs: [
          "First page converts page 1 only, which is ideal for covers and one-page documents. Selected pages shows a checkbox for every page so you can tick exactly the ones you want. All pages converts the whole document. Thumbnail previews help you find the right page; for longer files only the first few previews are shown, but every page can still be ticked and converted.",
          "Pages are converted one by one with a progress bar. When it finishes, each page has its own download button, and Download all starts the downloads one after another. Your browser may ask permission to download several files the first time.",
        ],
      },
      {
        id: "long-pdfs",
        heading: "What if my PDF is longer than 40 pages or locked?",
        paragraphs: [
          "Split it first. The PDF Splitter can pull out the range you need, and you then convert that smaller file. The page limit keeps memory use reasonable, because each rendered page is a full image held in the browser.",
          "Password-protected PDFs cannot be opened. Open the file in a viewer where you know the password, save or print an unlocked copy if you are allowed to, and convert that.",
        ],
      },
      {
        id: "use-cases",
        heading: "When is a JPG better than sharing the PDF?",
        paragraphs: [
          "Choose a JPG when people will glance at one page rather than read the whole document: an event flyer in a group chat, a chart dropped into a slide, a page preview on a web page, or a menu posted to social media. Images display inline in almost every app, while a PDF usually opens in a separate viewer.",
          "Keep the PDF when the reader needs to search, copy text, click links, fill in fields, or print at high quality. A JPG is a picture of the page, so all of those features are gone. For multi-page documents that will be read start to finish, the PDF is also kinder to the reader than a stack of images.",
        ],
      },
      {
        id: "size",
        heading: "How large will the JPG files be?",
        paragraphs: [
          "File size depends on how busy the page is and on the quality setting. A page of plain text on white compresses very well, while a page covered in photos or gradients produces a much larger file. Lowering the quality slider shrinks every page, at the cost of softer edges.",
          "If the images are still too large for an upload limit, run the most important page through the Image Compressor, or resize it in the Image Resizer to the width it will actually be shown at.",
        ],
      },
      {
        id: "privacy-pdf",
        heading: "Is my document uploaded?",
        paragraphs: [
          "No. The PDF is read and drawn inside your browser tab, and the images are created there as well. Closing or resetting the tool releases them. That matters for invoices, contracts and statements, which often carry personal details you would not want stored on someone else’s server.",
        ],
      },
      {
        id: "troubleshoot",
        heading: "What if a page looks wrong in the JPG?",
        paragraphs: [
          "Most PDFs render the same way they look in a viewer. Occasionally a page uses an unusual font or effect that the browser’s PDF engine draws slightly differently, or a very large page takes a long time. If the result looks off, try converting just that page, check it in another PDF viewer, or print the page to a fresh PDF and convert that copy. If the tool reports that the file is damaged, it could not read the PDF structure at all, and re-exporting the document from its original app is the best fix.",
        ],
      },
    ],
    stepsHeading: "How to convert a PDF to JPG online",
    steps: [
      { title: "Choose the PDF", body: "Drop or select a PDF up to 20 MB and 40 pages. Page previews appear when it loads." },
      { title: "Pick pages", body: "Choose First page, Selected pages (then tick the pages), or All pages." },
      { title: "Set quality", body: "Adjust the JPG quality slider. 80 is a good starting point for documents." },
      { title: "Convert and download", body: "Press Convert, wait for the progress bar, then download single pages or use Download all." },
    ],
    examples: [
      { title: "Sharing a certificate on social media", body: "A one-page certificate PDF is converted with First page at quality 90. The JPG of a US Letter page is about 918 × 1,188 pixels and uploads like any photo." },
      { title: "Putting two slides into a chat", body: "From a 24-page slide deck exported to PDF, choose Selected pages and tick pages 5 and 12. You get two files named after the deck, ending in -page-5.jpg and -page-12.jpg." },
      { title: "A 60-page report", body: "The file is over the 40-page limit, so split out pages 1 to 20 with the PDF Splitter, then convert that part with All pages." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "Check small print", body: "Fine footnotes may be hard to read at screen resolution. Zoom into the result before relying on it." },
      { heading: "File names", body: "Each image is named after the PDF with -page- and the page number, so the order stays clear in your downloads folder." },
      { heading: "Going the other way", body: "To combine JPGs back into a single document, use Image to PDF." },
    ],
    faqs: [
      { question: "What resolution are the JPG images?", answer: "Pages are rendered at 1.5 times their PDF size, about 108 pixels per inch, with the longest edge capped at 4,096 pixels." },
      { question: "What does the JPG quality slider change?", answer: "It sets JPG compression from 10 to 100. Higher numbers give cleaner text and larger files." },
      { question: "Will the text in the JPG still be selectable?", answer: "No. The page becomes a flat image, so text, links and form fields are just pixels." },
      { question: "Does Download all give me a ZIP file?", answer: "No. It starts each page download in turn, so you receive separate JPG files." },
      { question: "Why are some page previews missing?", answer: "Only the first few thumbnails are drawn to save memory. You can still tick and convert later pages." },
      { question: "Why does a transparent area come out white?", answer: "JPG has no transparency, so the page is drawn on a white background before saving." },
      { question: "Can I get PNG instead of JPG?", answer: "This tool outputs JPG only. Convert a page with the Image Converter afterwards if you need PNG." },
      { question: "How are the image files named?", answer: "The PDF name followed by -page- and the page number, such as report-page-3.jpg." },
      { question: "Is this good enough for printing?", answer: "It suits screens and sharing. For high-quality print, use the original PDF." },
      { question: "Can I convert a scanned PDF?", answer: "Yes. Scanned pages are images inside the PDF, and they are rendered to JPG like any other page." },
    ],
    faqMax: 10,
    cta: { before: "Turn pages into images with the free", linkLabel: "PDF to JPG", href: "/tools/pdf-to-jpg", after: " converter." },
    alsoSee: [
      { before: "To cut a long PDF down first, use the", linkLabel: "PDF Splitter", href: "/tools/pdf-splitter", after: "." },
      { before: "To put images back into a PDF, try", linkLabel: "Image to PDF", href: "/tools/image-to-pdf", after: "." },
    ],
  },
};

const qrCode: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-make-a-qr-code",
    title: "How to Make a QR Code for a Link or Text",
    primaryKeyword: "make a qr code",
    secondaryKeywords: ["free qr code for a link", "static qr code", "qr code png", "qr code size for print", "test a qr code"],
    toolSlug: "qr-code-generator",
    siblingToolSlugs: ["qr-code-scanner", "qr-code-generator-pro", "utm-builder"],
    metaTitle: "How to Make a QR Code: Links, Text, Print Size and Testing",
    metaDescription:
      "Create a static QR code from a URL or text and save it as a PNG. How QR codes store data, why short links scan better, and how to test before printing.",
    excerpt:
      "Paste a link or a short message, generate the code, and save the PNG. This guide explains what is inside a QR code, how to keep it easy to scan, and how to check it before it goes to print.",
    relatedArticles: ["how-to-scan-a-qr-code", "how-to-create-a-utm-url", "how-to-read-a-url"],
    category: "seo-utilities",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: open the QR Code Generator, paste a URL or type some text (up to 1,200 characters), and press Generate. A square PNG code appears with the content written underneath so you can double-check it. Download it as qr-code.png and test it with a phone camera before you share or print it. The code is created in your browser and does not expire.",
    why:
      "A QR code lets someone open a page or read a message by pointing a camera at it, which is far easier than typing a long address from a poster, menu, packaging or slide. Getting it right first time matters because printed codes are expensive to replace.",
    sections: [
      {
        id: "what-is-inside",
        heading: "What is actually stored inside a QR code?",
        paragraphs: [
          "A QR code is a grid of dark and light squares, called modules, that encodes a piece of text. When the text is a web address, phones offer to open it. When it is ordinary words, phones show the words.",
          "The codes made here are static: the content is written directly into the pattern. Nothing points back to Tools Star Hub, there is no account, and no scan counting. The flip side is that you cannot edit a static code after printing it. If the link might change, point the code at a page you control and change where that page leads.",
        ],
      },
      {
        id: "length",
        heading: "Why do shorter links make better QR codes?",
        paragraphs: [
          "More characters need more modules, so the grid becomes denser and each square gets smaller at the same printed size. Dense codes are harder for older cameras to read from a distance or at an angle.",
          "Remove tracking clutter you do not need, prefer a short path on your own domain, and avoid pasting long text when a link to a page would do. If you want campaign tracking, build a tidy link with the UTM Builder and keep the parameters short.",
        ],
        table: {
          caption: "How content length affects a QR code",
          headers: ["Content", "Approximate length", "Effect on the code"],
          rows: [
            ["https://example.com", "19 characters", "Small grid, very easy to scan"],
            ["A link with a few UTM tags", "80–120 characters", "Noticeably denser"],
            ["A paragraph of text", "Several hundred characters", "Very dense; needs a larger print size"],
          ],
        },
      },
      {
        id: "design",
        heading: "What does the generated code look like?",
        paragraphs: [
          "The basic generator makes a 320-pixel PNG with dark navy modules on white, medium (M) error correction and a narrow quiet zone, which is the blank border around the pattern. Error correction lets a code survive a little dirt or damage; level M can recover roughly 15 percent of the data.",
          "If you need your own colours, a wider quiet zone, a different error correction level, or a larger image, use QR Code Generator Pro. It also builds Wi-Fi, contact, email, phone and SMS codes from form fields.",
        ],
      },
      {
        id: "print",
        heading: "How big should a printed QR code be?",
        paragraphs: [
          "A common rule of thumb is to make the code at least about 2 cm (roughly 0.8 inch) wide for close-up use such as business cards, and larger for anything read from further away. A loose guide is a width of around one-tenth of the scanning distance, so a code read from 2 metres should be about 20 cm wide. Treat these as starting points and test at real distance.",
          "Leave white space around the code, print dark on light, and avoid placing it over a busy photo. The 320-pixel PNG is fine for screens and small print. For larger prints, export up to 640 pixels from the Pro version, and keep the image sharp by scaling it in whole steps rather than stretching it slightly.",
        ],
      },
      {
        id: "testing",
        heading: "How do I test a QR code before sharing it?",
        paragraphs: [
          "Scan it with at least two phones, ideally one older model. Open the link fully and confirm it lands on the right page, not a login screen or an error. Then test the printed proof, not just the screen version, because paper, ink and lighting change how it reads.",
          "You can also upload the PNG to the QR Code Scanner on this site to see exactly what text the code contains.",
        ],
      },
      {
        id: "content-types",
        heading: "What can I put in a basic QR code?",
        paragraphs: [
          "Anything that is text: a web address, a short message, a product code, a reference number, or a few lines of instructions. Phones recognise links that start with http:// or https:// and offer to open them. Other text is usually shown on screen, ready to copy.",
          "Structured codes, such as joining a Wi-Fi network or saving a contact card, use special text formats that the Pro generator fills in for you from simple form fields. You could type those formats by hand here, but a typo can make the code unusable, so the form is safer.",
        ],
      },
      {
        id: "mistakes",
        heading: "What are common QR code mistakes?",
        paragraphs: [
          "Linking to a page that is not mobile-friendly, so people scan and then struggle to read it. Placing the code where it cannot be scanned, such as on a moving vehicle, high on a wall, or behind glass with glare. Printing it too small for the distance people stand from it.",
          "Another common problem is low contrast. Light grey on white, or a code laid over a photo, can fail on some cameras. Dark modules on a plain light background are the safest choice, which is what this generator produces.",
          "Finally, check that the destination will last. A static code keeps pointing at the same address for as long as the printed item exists, so avoid temporary links that may expire.",
        ],
      },
      {
        id: "privacy-qr",
        heading: "Is anything I type stored?",
        paragraphs: [
          "No. The code is drawn in your browser and the text is not sent to a server. Nothing about the code is recorded, which also means there is no history to come back to, so keep a note of the content you used.",
        ],
      },
      {
        id: "where",
        heading: "Where should I place a QR code?",
        paragraphs: [
          "Put it where people already pause: on a table, a counter, a ticket, packaging, or the last slide of a talk. Add a short line of text that says what happens after scanning, such as “Scan for the menu”, because people are more willing to scan when they know where it leads. Printing the short address underneath also helps anyone whose camera will not cooperate.",
        ],
      },
      {
        id: "offline",
        heading: "Does a QR code need the internet to work?",
        paragraphs: [
          "Reading the code does not. The camera decodes the pattern on the phone itself. Whether the result needs a connection depends on the content: a web link needs internet to open the page, while plain text appears straight away even offline.",
        ],
      },
    ],
    stepsHeading: "How to create a QR code online",
    steps: [
      { title: "Enter the content", body: "Paste a full URL, including https://, or type plain text. Leading and trailing spaces are removed." },
      { title: "Generate", body: "Press Generate. The code appears with its content printed underneath for checking." },
      { title: "Download", body: "Save the image as qr-code.png." },
      { title: "Test it", body: "Scan it with a phone camera, and scan the printed proof again before a large print run." },
    ],
    examples: [
      { title: "A restaurant menu link", body: "Paste https://example.com/menu and generate. The short address gives a clean, open grid that scans quickly from a table card." },
      { title: "A note on a shipping box", body: "Type “Fragile: glass inside, keep upright”. Phones show the text directly without needing an internet connection." },
      { title: "A campaign poster", body: "Build a link with three short UTM tags, generate the code, then test it on two phones from about two metres. Use the Pro version to export a larger PNG for the poster." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "Include https://", body: "Without the scheme, some scanners treat the content as plain text instead of a link." },
      { heading: "Static means permanent", body: "The content cannot be changed after you print. Keep the destination page live." },
      { heading: "Check the caption", body: "The text under the code shows exactly what was encoded, which catches typos before printing." },
    ],
    faqs: [
      { question: "What is a static QR code?", answer: "A code whose content is written directly into the pattern. It needs no service to keep working, but it cannot be edited later." },
      { question: "Can I change the link after printing?", answer: "Not in the code itself. Point it at a page you control and redirect that page if the destination changes." },
      { question: "Does the code track how many people scan it?", answer: "No. Static codes made here have no tracking or analytics." },
      { question: "What size is the downloaded image?", answer: "The basic generator saves a 320 × 320 pixel PNG. QR Code Generator Pro lets you choose from 128 to 640 pixels." },
      { question: "Can I change the colours?", answer: "Not in the basic tool, which uses navy on white. The Pro version lets you choose foreground and background colours." },
      { question: "What error correction level is used?", answer: "Level M, which can recover roughly 15 percent of a damaged or dirty code." },
      { question: "Why does my code look so dense?", answer: "The content is long. Shorten the link or text to get larger, easier-to-scan modules." },
      { question: "How can I check what a QR code contains?", answer: "Scan it with your phone or upload the image to the QR Code Scanner." },
      { question: "Should I include https:// in the URL?", answer: "Yes. It makes scanners recognise the content as a web link." },
      { question: "Can I use the code on printed products?", answer: "Yes. Test a printed proof at real size and distance first, and give it a clear white border." },
    ],
    faqMax: 10,
    cta: { before: "Create a code now with the free", linkLabel: "QR Code Generator", href: "/tools/qr-code-generator", after: "." },
    alsoSee: [
      { before: "For colours, sizes and Wi-Fi codes, use", linkLabel: "QR Code Generator Pro", href: "/tools/qr-code-generator-pro", after: "." },
      { before: "To read a code from an image, try the", linkLabel: "QR Code Scanner", href: "/tools/qr-code-scanner", after: "." },
    ],
  },
};

const lineSorter: ToolGuide = {
  article: toolGuideArticle({
    slug: "how-to-sort-lines-of-text",
    title: "How to Sort Lines of Text Alphabetically, by Number or by Length",
    primaryKeyword: "sort lines of text",
    secondaryKeywords: ["alphabetize a list", "sort numbers in a list", "reverse alphabetical order", "sort by line length", "natural sort"],
    toolSlug: "line-sorter",
    siblingToolSlugs: ["duplicate-line-remover", "whitespace-remover", "add-line-numbers"],
    metaTitle: "How to Sort Lines of Text: A–Z, Numbers, Length and Case",
    metaDescription:
      "Sort a list A to Z, Z to A, by leading number or by length. Why 10 can come before 9, how capitals affect order, and how to clean the list while sorting.",
    excerpt:
      "Sorting looks simple until capitals, numbers and stray spaces get involved. This guide explains each sort mode, the rules behind the order you see, and how to get the result you expect.",
    relatedArticles: ["how-to-remove-duplicate-lines", "how-to-remove-extra-spaces-from-text", "how-to-add-line-numbers"],
    category: "text-tools",
    publishedAt: PUBLISHED,
  }),
  content: {
    intro:
      "Quick answer: paste one item per line into the Line Sorter, pick a mode (A → Z, Z → A, Numeric ascending, Numeric descending, Shortest → longest or Longest → shortest), and sort. Case-insensitive is on by default so “apple” and “Apple” sit together. You can also trim spaces before comparing, ignore empty lines, and remove duplicates in the same pass, then copy the result or download sorted.txt.",
    why:
      "Sorted lists are easier to scan, compare and check for gaps. Alphabetizing names, tags, file lists or glossary terms by hand is slow and error-prone, and a spreadsheet is overkill when all you have is a column of text.",
    sections: [
      {
        id: "modes",
        heading: "What does each sort mode do?",
        paragraphs: [
          "The two text modes compare lines character by character. The two numeric modes look for a number at the start of each line. The two length modes count characters. When two lines tie, their original order is kept, which is called a stable sort.",
        ],
        table: {
          caption: "Sort modes and their rules",
          headers: ["Mode", "Compares", "Tie-breaker"],
          rows: [
            ["A → Z / Z → A", "Characters from left to right", "Original order"],
            ["Numeric ascending / descending", "The number at the start of the line", "Lines without a number go last, sorted A → Z"],
            ["Shortest → longest / Longest → shortest", "Number of characters", "A → Z, then original order"],
          ],
        },
      },
      {
        id: "ten-before-nine",
        heading: "Why does 10 come before 9 in alphabetical order?",
        paragraphs: [
          "Text sorting compares the first character first. “1” comes before “9”, so “10” lands ahead of “9” no matter how many digits follow. File names such as photo10 and photo9 behave the same way.",
          "Use Numeric ascending when the lines start with numbers. The tool reads the leading number, including a minus sign and decimals such as -2.5, and sorts by its value. Lines that do not start with a number, or start with a symbol such as $ or #, are placed after the numeric lines. A comma inside a number stops the reading, so “1,200” is read as 1; remove thousands separators first if they matter.",
          "Numbers in the middle of a line, such as “Chapter 10”, are not used by the numeric modes. Put the number at the start, or pad with zeros (Chapter 09, Chapter 10), so plain A → Z sorting works.",
        ],
      },
      {
        id: "case",
        heading: "How do capital letters and accents affect the order?",
        paragraphs: [
          "With Case-insensitive on, letters are compared as lowercase, so “banana”, “Banana” and “BANANA” sit together. Switch it off and the order follows character codes, where all capitals come before all lowercase letters. That puts “Zebra” above “apple”.",
          "The comparison is by character code rather than the rules of a particular language. Accented letters such as é or ö sort after z, and letters from other alphabets sort after Latin letters. That is predictable for codes and identifiers, but it differs from a dictionary. If you need strict language-aware order for names, a spreadsheet’s sort with the right locale is the better choice.",
        ],
      },
      {
        id: "cleaning",
        heading: "Can I clean the list while sorting it?",
        paragraphs: [
          "Yes. Trim before comparing ignores spaces at the ends of lines, so “ pear” is not pushed to the top because of a leading space. The lines are output as they were, with the spaces still there. Ignore empty lines removes blank rows. Remove duplicates keeps the first copy of each line and respects the case and trim settings.",
          "For heavier cleanup, such as collapsing double spaces inside lines, run the text through the Whitespace Remover first. The tool shows how many lines went in and how many came out, which is a quick check on how much was removed.",
        ],
      },
      {
        id: "length",
        heading: "When is sorting by length useful?",
        paragraphs: [
          "Length sorting helps you spot outliers: the shortest lines are often typos or empty entries, and the longest may be two items accidentally joined. Writers use it to find long headlines or titles that will be cut off, and developers use it to tidy lists of imports or keys. Length counts every character, including spaces, unless Trim before comparing is on.",
        ],
      },
      {
        id: "uses",
        heading: "What are common reasons to sort lines?",
        paragraphs: [
          "Glossaries, bibliographies, guest lists, team rosters and tag lists are easier to read in alphabetical order. Developers sort configuration keys, dependency lists and import lines so that changes show up clearly in a code review. Data checks are another use: sorting puts near-identical entries next to each other, so typos such as “Karachi” and “Karachii” become obvious.",
          "Numeric sorting suits scores, prices with the number first, rankings and timestamps written as plain numbers. Reverse modes are useful for leaderboards and for seeing the newest or largest items first.",
        ],
      },
      {
        id: "spreadsheet",
        heading: "Is this the same as sorting in a spreadsheet?",
        paragraphs: [
          "Not quite. Spreadsheets sort rows of cells and usually apply language-aware rules, so accents and case are treated the way a dictionary would treat them. They can also sort by several columns at once.",
          "The Line Sorter treats each line as a single piece of text and compares character codes. That makes the order consistent and easy to predict, and it is fast for a single column of values copied from anywhere. For tables with several fields, or names that must follow a particular language’s alphabet, use a spreadsheet.",
        ],
      },
      {
        id: "privacy-sort",
        heading: "Is my list sent anywhere?",
        paragraphs: [
          "No. Sorting happens in your browser tab, and the list is not sent to Tools Star Hub. You can paste customer names, email lists or internal notes without them leaving your device.",
        ],
      },
      {
        id: "dates",
        heading: "How do I sort dates or times?",
        paragraphs: [
          "Write them so that text order matches time order. The year-month-day format, such as 2026-03-09, sorts correctly with plain A → Z, as long as months and days always use two digits. Formats like 9/3/2026 or March 9 do not, because the text order follows the first characters rather than the calendar.",
          "Times written as 24-hour values with two-digit hours, such as 07:45 and 18:10, also sort correctly as text. If your list uses a mix of formats, tidy them first with Find and Replace, then sort.",
        ],
      },
      {
        id: "undo",
        heading: "Can I get my original order back?",
        paragraphs: [
          "Yes, as long as you keep the original. The sorted output appears in a separate Result box and your pasted text stays in the input box, so you can try different modes and options without losing anything. If you need to restore an order later, number the lines with Add Line Numbers before sorting; sorting numerically by those numbers puts everything back where it started.",
        ],
      },
    ],
    stepsHeading: "How to sort lines online",
    steps: [
      { title: "Paste the list", body: "Put one item per line. The tool accepts up to 400,000 characters." },
      { title: "Choose a mode", body: "Pick A → Z, Z → A, a numeric order, or a length order." },
      { title: "Set the options", body: "Leave Case-insensitive on for most lists, and add trimming, empty-line removal or deduping as needed." },
      { title: "Sort and save", body: "Sort, check the line counts, then copy the result or download sorted.txt." },
    ],
    examples: [
      { title: "Fixing a numbered list", body: "Lines “10 Rome”, “2 Paris” and “1 Oslo” sorted A → Z give 1, 10, 2. Numeric ascending gives 1 Oslo, 2 Paris, 10 Rome." },
      { title: "Alphabetizing a messy tag list", body: "Tags include “SEO”, “seo ” and blank lines. With Case-insensitive, Trim, Ignore empty lines and Remove duplicates on, you get one “SEO” entry in a clean A → Z list." },
      { title: "Finding the longest product titles", body: "Choose Longest → shortest to see which titles are likely to be truncated in a store listing, and edit those first." },
    ],
    notesHeading: "Tips and limitations",
    notes: [
      { heading: "One item per line", body: "Comma-separated values on one line are treated as a single line. Use Find and Replace to turn commas into line breaks first." },
      { heading: "No multi-column sorting", body: "The tool sorts whole lines. For sorting CSV rows by a specific column, use a spreadsheet." },
      { heading: "Number the result", body: "Add positions to a sorted list with the Add Line Numbers tool." },
    ],
    faqs: [
      { question: "Why does Z come before a when I sort?", answer: "Case-insensitive is off, so capitals sort before lowercase letters. Turn it on to mix them together." },
      { question: "How do I sort in reverse alphabetical order?", answer: "Choose Z → A." },
      { question: "Where do lines without numbers go in a numeric sort?", answer: "After all the lines that start with a number, in A → Z order." },
      { question: "Can it sort negative numbers and decimals?", answer: "Yes, when they are at the start of the line, such as -3 or 2.75." },
      { question: "Does trimming change my output?", answer: "No. Trim affects only the comparison; the lines are output with their original spacing." },
      { question: "Is the sort stable?", answer: "Yes. Lines that compare as equal keep their original order." },
      { question: "Why are accented words at the end of the list?", answer: "Lines are compared by character code, and accented letters have codes after z." },
      { question: "Can I sort and remove duplicates in one step?", answer: "Yes. Tick Remove duplicates; the first copy of each line is kept." },
      { question: "Does it sort numbers with thousands separators?", answer: "Not reliably. The number is read up to the comma, so remove separators first." },
      { question: "How do I save the sorted list?", answer: "Copy it or use Download .txt to save sorted.txt." },
    ],
    faqMax: 10,
    cta: { before: "Put any list in order with the free", linkLabel: "Line Sorter", href: "/tools/line-sorter", after: "." },
    alsoSee: [
      { before: "To drop repeated lines without sorting, use the", linkLabel: "Duplicate Line Remover", href: "/tools/duplicate-line-remover", after: "." },
      { before: "To number the sorted lines, try", linkLabel: "Add Line Numbers", href: "/tools/add-line-numbers", after: "." },
    ],
  },
};

export const batch2Guides: ToolGuide[] = [imageResizer, imageCropper, imageConverter, pdfToJpg, qrCode, lineSorter];
