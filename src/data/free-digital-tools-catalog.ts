/**
 * Free Digital Tools guide body, ported from the humanized article.
 * Tool cards and filter categories come from the standalone directory.
 */
export const freeDigitalToolsCatalog = {
  "sections": [
    {
      "id": "guide",
      "headingId": "guide-h",
      "heading": "How to use this guide",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "This guide is sorted by the job you need done, not by tech jargon. Follow the six steps if you're taking something from idea to published, or skip straight to the task staring at you."
            }
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "1 Plan — Work out dates, deadlines and time zones.",
                "href": "#dates"
              }
            ],
            [
              {
                "text": "2 Create — Count, compare and tidy your words.",
                "href": "#writing"
              }
            ],
            [
              {
                "text": "3 Design — Resize, crop and convert your visuals.",
                "href": "#images"
              }
            ],
            [
              {
                "text": "4 Optimize — Write the tags and files a page needs.",
                "href": "#website"
              }
            ],
            [
              {
                "text": "5 Distribute — Share with tagged links and QR codes.",
                "href": "#links"
              }
            ],
            [
              {
                "text": "6 Measure — Use free analytics for the real numbers.",
                "href": "#cant"
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "kt",
      "headingId": "kt-h",
      "heading": "Key Takeaways",
      "blocks": [
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "Every tool here is free with no account, and most run in your browser, so files and pasted text stay on your device."
              }
            ],
            [
              {
                "text": "Two things leave your browser: the AI buttons send text to Google's Gemini, and one SEO preview tool sends a URL to our server."
              }
            ],
            [
              {
                "text": "Several tools do less than their names suggest. Some only write prompts, and one reads only text that already exists in a PDF. Each entry states its limit."
              }
            ],
            [
              {
                "text": "Calculators give estimates and detectors give patterns. Neither is an approval, a quote or proof."
              }
            ],
            [
              {
                "text": "There's no keyword research, rank tracking, analytics or social scheduling here, so we point to free external tools for those."
              }
            ],
            [
              {
                "text": "We opened and tested all 102 tools on 23 October 2026. Ninety-five passed outright, and seven Gemini-powered tools were only partly tested."
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "what-are",
      "headingId": "what-are-h",
      "heading": "What Are Free Digital Tools?",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "They're small web utilities that do one job — compress an image, count words, merge a PDF — and cost nothing. No signup here, and most of them run right in your browser."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "You've had the day: a client sends a 40 MB PDF your email won't take, a form wants a photo under 200 KB, and an editor wants the headline in sentence case. None of that needs software you'll keep forever. You just need a quick tool you can trust."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Tools Star Hub's homepage names four audiences: freelancers, students, digital marketers and news writers. Marketing is one use among many here — sitting beside coursework, invoicing, reporting and coding."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Two terms come up again and again. Browser-based tools do their work inside the page on your own device, so a file is processed locally instead of being uploaded. No-signup tools open without an account, which means there's nothing to remember or cancel."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "That makes these free online tools a good fit for one-off jobs. They won't replace a full design suite, an accountant or an analytics platform — and every entry below says where its tool stops."
            }
          ]
        },
        {
          "type": "h3",
          "text": "How is this guide organized?"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "By the job you want done. Each section groups tools you'd reach for together, and every tool has its own short entry with a direct link you can share."
            }
          ]
        }
      ]
    },
    {
      "id": "start",
      "headingId": "start-h",
      "heading": "Which Tool Should You Start With?",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Start with the section that matches the job in front of you. The table shows where each audience usually begins."
            }
          ]
        },
        {
          "type": "table",
          "caption": "Where each audience usually starts",
          "headers": [
            "Audience",
            "Typical jobs",
            "Start in"
          ],
          "rows": [
            [
              [
                {
                  "text": "Freelancers"
                }
              ],
              [
                {
                  "text": "Sending invoices, shrinking deliverables, checking pay and loan figures"
                }
              ],
              [
                {
                  "text": "PDFs",
                  "href": "#pdf"
                },
                {
                  "text": ", "
                },
                {
                  "text": "images",
                  "href": "#images"
                },
                {
                  "text": ", "
                },
                {
                  "text": "money estimates",
                  "href": "#money"
                }
              ]
            ],
            [
              [
                {
                  "text": "Students"
                }
              ],
              [
                {
                  "text": "Word limits, cleaning notes, grades, deadlines"
                }
              ],
              [
                {
                  "text": "Writing",
                  "href": "#writing"
                },
                {
                  "text": ", "
                },
                {
                  "text": "everyday maths",
                  "href": "#maths"
                },
                {
                  "text": ", "
                },
                {
                  "text": "dates",
                  "href": "#dates"
                }
              ]
            ],
            [
              [
                {
                  "text": "Digital marketers"
                }
              ],
              [
                {
                  "text": "Campaign links, QR codes, page tags and previews"
                }
              ],
              [
                {
                  "text": "Links",
                  "href": "#links"
                },
                {
                  "text": ", "
                },
                {
                  "text": "website setup",
                  "href": "#website"
                },
                {
                  "text": ", "
                },
                {
                  "text": "images",
                  "href": "#images"
                }
              ]
            ],
            [
              [
                {
                  "text": "News writers"
                }
              ],
              [
                {
                  "text": "Translating, shortening and checking drafts"
                }
              ],
              [
                {
                  "text": "News",
                  "href": "#news"
                },
                {
                  "text": ", "
                },
                {
                  "text": "writing",
                  "href": "#writing"
                },
                {
                  "text": ", "
                },
                {
                  "text": "time zones",
                  "href": "#dates"
                }
              ]
            ],
            [
              [
                {
                  "text": "Developers and site owners"
                }
              ],
              [
                {
                  "text": "Formatting data, minifying code, handling tokens"
                }
              ],
              [
                {
                  "text": "Code",
                  "href": "#code"
                },
                {
                  "text": ", "
                },
                {
                  "text": "security",
                  "href": "#security"
                },
                {
                  "text": ", "
                },
                {
                  "text": "website setup",
                  "href": "#website"
                }
              ]
            ]
          ]
        }
      ]
    },
    {
      "id": "all-tools",
      "headingId": "all-tools-h",
      "heading": "Browse All 102 Tools",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Pick a chip to filter the list by category. Every card links to the tool page, and the sections that follow explain each tool in more depth."
            }
          ]
        },
        {
          "type": "directory"
        }
      ]
    },
    {
      "id": "pdf",
      "headingId": "pdf-h",
      "heading": "Work With PDFs",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Free PDF tools cover most paperwork jobs: joining files, pulling out pages, shrinking a file for email and turning pages into pictures. Everything here runs in your browser, so a contract or invoice isn't uploaded to us. PDFs use a fixed layout, which is why editing the text inside a page is outside what these tools do."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Your cover page and report should land as one file, not three. "
            },
            {
              "text": "PDF Merger",
              "href": "/tools/pdf-merger"
            },
            {
              "text": " joins two to ten PDFs in the order you set, up to 80 pages combined, and the Up and Down buttons rearrange them. Password-protected files won't open, and form fields aren't flattened."
            }
          ],
          "id": "tool-pdf-merger"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Need only pages 1 to 3 and page 6 of a long report? "
            },
            {
              "text": "PDF Splitter",
              "href": "/tools/pdf-splitter"
            },
            {
              "text": " copies the ranges you type, such as "
            },
            {
              "text": "1-3,6",
              "code": true
            },
            {
              "text": ", into a new PDF of up to 80 pages. A reversed range like 5-2 is rejected, and your original file stays as it was. "
            },
            {
              "text": "PDF Merger",
              "href": "#tool-pdf-merger"
            },
            {
              "text": " does the opposite job."
            }
          ],
          "id": "tool-pdf-splitter"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "When an attachment bounces, size is usually the culprit. "
            },
            {
              "text": "PDF Compressor",
              "href": "/tools/pdf-compressor"
            },
            {
              "text": " rewrites a PDF at Low, Balanced or Strong and shows the sizes side by side. Start with Balanced: Strong turns every page into a JPEG, so the text can no longer be selected, and a smaller file isn't guaranteed in any mode. If the result is still too big, split it with "
            },
            {
              "text": "PDF Splitter",
              "href": "#tool-pdf-splitter"
            },
            {
              "text": " and send the parts."
            }
          ],
          "id": "tool-pdf-compressor"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Print quotes and upload forms often ask for a page count. "
            },
            {
              "text": "PDF Page Counter",
              "href": "/tools/pdf-page-counter"
            },
            {
              "text": " reads the number, file name and size without changing the file. Blank pages and covers are counted, and a damaged or password-protected file isn't read. Run it before "
            },
            {
              "text": "PDF Splitter",
              "href": "#tool-pdf-splitter"
            },
            {
              "text": " so your ranges stay inside the document."
            }
          ],
          "id": "tool-pdf-page-counter"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Copying text out of a PDF by hand eats an afternoon. "
            },
            {
              "text": "PDF to Text",
              "href": "/tools/pdf-to-text"
            },
            {
              "text": " extracts the stored text layer from every page, one page or a range such as "
            },
            {
              "text": "1-3,5",
              "code": true
            },
            {
              "text": ", and refuses files over 20 MB or 80 pages. It doesn't do OCR, so a scanned page with no text layer comes back blank. For those pages, turn them into pictures with "
            },
            {
              "text": "PDF to JPG",
              "href": "#tool-pdf-to-jpg"
            },
            {
              "text": " and read them with "
            },
            {
              "text": "Image to Text",
              "href": "#tool-image-to-text"
            },
            {
              "text": "."
            }
          ],
          "id": "tool-pdf-to-text"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Want a cover thumbnail or a slide for a post? Start with a page image. "
            },
            {
              "text": "PDF to JPG",
              "href": "/tools/pdf-to-jpg"
            },
            {
              "text": " renders the first page, the pages you tick or every page as JPEG files, up to 40 pages and 20 MB. The output is a picture of the page, not editable text, and it's JPEG only, so pass it through "
            },
            {
              "text": "Image Converter",
              "href": "#tool-image-converter"
            },
            {
              "text": " if you need PNG."
            }
          ],
          "id": "tool-pdf-to-jpg"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Before you send a PDF out, check what metadata it still carries. "
            },
            {
              "text": "PDF Metadata Viewer / Remover",
              "href": "/tools/pdf-metadata"
            },
            {
              "text": " shows those Info fields — old author names, software stamps — and downloads a copy with them cleared. It isn't a full wipe, because page text, comments and images stay, and files over 80 pages are refused."
            }
          ],
          "id": "tool-pdf-metadata"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Need meeting notes as a document in a hurry? "
            },
            {
              "text": "Text to PDF",
              "href": "/tools/text-to-pdf"
            },
            {
              "text": " turns pasted text into an A4 or Letter PDF with an optional title and page numbers. It uses Helvetica, so characters that font can't draw — including many non-Latin scripts — become question marks, and images aren't placed."
            }
          ],
          "id": "tool-text-to-pdf"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "When a .docx has to go out as a PDF, "
            },
            {
              "text": "Word to PDF",
              "href": "/tools/word-to-pdf"
            },
            {
              "text": " reads the words from the file and places them in a plain PDF. It's a text conversion, not a layout copy: images, styling, table grids, headers and footers are dropped, and old .doc files are rejected. For a designed document, export from Word itself."
            }
          ],
          "id": "tool-word-to-pdf"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Scans and screenshots travel better as one file. "
            },
            {
              "text": "Image to PDF",
              "href": "/tools/image-to-pdf"
            },
            {
              "text": " turns up to 20 JPG or PNG images into a PDF in the order you set, on A4, Letter or each image's own size. WebP isn't accepted, and any side over 2,000 pixels is downsampled before it's embedded. Compress heavy photos first with "
            },
            {
              "text": "Image Compressor",
              "href": "#tool-image-compressor"
            },
            {
              "text": " to keep the PDF small."
            }
          ],
          "id": "tool-image-to-pdf"
        }
      ]
    },
    {
      "id": "images",
      "headingId": "images-h",
      "heading": "Shrink, Convert and Edit Images",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Free image tools save you from opening a heavy editor for a small job. Oversized photos slow pages and get rejected on upload, so size and shape come first."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "One idea explains most of what follows. JPEG and WebP are lossy formats: they make files smaller by discarding detail the eye is least likely to miss. PNG is lossless, so it keeps every pixel and costs more bytes."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Drop a 6 MB phone photo on a landing page and you'll feel it. "
            },
            {
              "text": "Image Compressor",
              "href": "/tools/image-compressor"
            },
            {
              "text": " is a free image compressor that re-encodes JPG, PNG or WebP in your browser at a quality from 10 to 100, and 80 is the starting value. PNG output is lossless here, so flat graphics may barely shrink. Compressing a JPEG a second time can add artifacts, so keep your original."
            }
          ],
          "id": "tool-image-compressor"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Social cards and thumbnails want exact pixel sizes. "
            },
            {
              "text": "Image Resizer",
              "href": "/tools/image-resizer"
            },
            {
              "text": " sets a new width and height for a JPG, PNG or WebP with the ratio locked, so a 2000×1000 picture becomes 1000×500 when you type a width of 1000. Switch the ratio lock off and the picture can stretch. It scales the whole image, so use "
            },
            {
              "text": "Image Cropper",
              "href": "#tool-image-cropper"
            },
            {
              "text": " to cut out a region."
            }
          ],
          "id": "tool-image-resizer"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Profile photos and covers need a frame, not a rescale. "
            },
            {
              "text": "Image Cropper",
              "href": "/tools/image-cropper"
            },
            {
              "text": " lets you drag a box in free, 1:1, 4:3 or 16:9 shapes and downloads the original pixels inside it. It doesn't rotate, filter or retouch, and files over 25 MB or with a side over 8,192 pixels are turned away."
            }
          ],
          "id": "tool-image-cropper"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "That form accepts only JPG and you've got a PNG. "
            },
            {
              "text": "Image Converter",
              "href": "/tools/image-converter"
            },
            {
              "text": " converts JPG to PNG and PNG to JPG in your browser. JPG can't store transparency, so a clear PNG background is filled with a color you choose, and converting a JPG to PNG won't undo damage JPEG already did. WebP, GIF and HEIC aren't supported."
            }
          ],
          "id": "tool-image-converter"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Is 1200×630 close to 16:9? "
            },
            {
              "text": "Aspect Ratio Calculator",
              "href": "/tools/aspect-ratio-calculator"
            },
            {
              "text": " simplifies any width and height into a ratio, and it can find a missing side from a ratio plus one known side. 1920×1080 reduces to 16:9, while 1200×630 reduces to 40:21. Decimal sizes are reduced from a rounded scale, so treat those results as approximate."
            }
          ],
          "id": "tool-aspect-ratio-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Retyping a screenshot of a printed notice is nobody's idea of fun. "
            },
            {
              "text": "Image to Text",
              "href": "/tools/image-to-text"
            },
            {
              "text": " reads English text from one JPG, PNG or WebP in your browser, using optical character recognition (OCR), which guesses characters from pixels. The first run downloads about 6.6 MB, and real photos can come back with wrong letters or extra lines, so blur, glare and small type mean you should proofread every result."
            }
          ],
          "id": "tool-image-to-text"
        }
      ]
    },
    {
      "id": "colors",
      "headingId": "colors-h",
      "heading": "Pick Colors and Style Web Pages",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Designers and site owners still lose time translating colors between formats. These tools cover picking, converting and checking, plus two generators that write CSS for you."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "When a brand color arrives as a swatch, you still need the code. "
            },
            {
              "text": "Color Picker",
              "href": "/tools/color-picker"
            },
            {
              "text": " lets you pick with the browser's control or type a hex value, then copies HEX, RGB and HSL. For example, #2563eb is rgb(37, 99, 235). It handles opaque colors only and can't sample pixels from a photo, which is a job for "
            },
            {
              "text": "Image Color Analyzer",
              "href": "#tool-image-color-analyzer"
            },
            {
              "text": "."
            }
          ],
          "id": "tool-color-picker"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Stylesheets use hex; design tools sometimes want RGB or HSL. "
            },
            {
              "text": "Hex to RGB",
              "href": "/tools/hex-to-rgb"
            },
            {
              "text": " accepts 3-, 6- and 8-digit hex, with or without the #, so #336699 becomes rgb(51, 102, 153). The 8-digit form carries transparency, and a color word such as red isn't accepted."
            }
          ],
          "id": "tool-hex-to-rgb"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Want a palette that matches a photo? "
            },
            {
              "text": "Image Color Analyzer",
              "href": "/tools/image-color-analyzer"
            },
            {
              "text": " lists 3 to 10 dominant colors from a JPG, PNG or WebP with HEX codes and each color's share of the sampled pixels. It shrinks the image to a 96-pixel edge first, so a rare accent color can be missed. Treat the shares as a guide, not a lab measurement."
            }
          ],
          "id": "tool-image-color-analyzer"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Light grey on white looks elegant — and reads badly. "
            },
            {
              "text": "Color Contrast Checker",
              "href": "/tools/color-contrast-checker"
            },
            {
              "text": " compares two solid colors and shows the WCAG 2 contrast ratio. WCAG's AA level asks for at least 4.5:1 for normal text and 3:1 for large text, and AAA asks for 7:1 and 4.5:1. Black on white scores 21:1, but a photo behind the text is outside what the tool can measure."
            }
          ],
          "id": "tool-color-contrast-checker"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Skip the image file — start the banner as a gradient. "
            },
            {
              "text": "CSS Gradient Generator",
              "href": "/tools/css-gradient-generator"
            },
            {
              "text": " builds linear, radial or conic gradients from two to eight color stops and gives you the CSS or an HTML snippet. The line "
            },
            {
              "text": "background: linear-gradient(90deg, #336699 0%, #ffffff 100%);",
              "code": true
            },
            {
              "text": " is a left-to-right fade. Repeating and layered gradients aren't generated."
            }
          ],
          "id": "tool-css-gradient-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Flat cards get depth from a soft shadow. "
            },
            {
              "text": "Box Shadow Generator",
              "href": "/tools/box-shadow-generator"
            },
            {
              "text": " tunes one CSS box-shadow, drop or inset, with a live preview, then copies the declaration, such as "
            },
            {
              "text": "box-shadow: 0 8px 24px rgba(15, 39, 68, 0.2);",
              "code": true
            },
            {
              "text": ". It writes a single shadow, so stack layers yourself in the stylesheet."
            }
          ],
          "id": "tool-box-shadow-generator"
        }
      ]
    },
    {
      "id": "writing",
      "headingId": "writing-h",
      "heading": "Count, Compare and Edit Writing",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Free text tools are the unglamorous workhorses of writing — counting, recasing, comparing and tidying. They don't judge your prose; they only act on text you paste in."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "\"500 words maximum\" on a scholarship essay leaves no room to guess. "
            },
            {
              "text": "Word Counter",
              "href": "/tools/word-counter"
            },
            {
              "text": " shows words, characters, sentences, paragraphs and reading time as you type. Reading time assumes about 225 words per minute, so it's an estimate, not a measurement. It doesn't check grammar or decide who wrote the text."
            }
          ],
          "id": "tool-word-counter"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Hard character caps show up on titles, bios and meta descriptions. "
            },
            {
              "text": "Character Counter",
              "href": "/tools/character-counter"
            },
            {
              "text": " counts characters with and without spaces, plus words and lines. Each emoji counts as one character here, and other platforms may count differently, so test close to the limit. For sentences and reading time, use "
            },
            {
              "text": "Word Counter",
              "href": "#tool-word-counter"
            },
            {
              "text": "."
            }
          ],
          "id": "tool-character-counter"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Headlines still arrive in all caps more often than you'd like. "
            },
            {
              "text": "Case Converter",
              "href": "/tools/case-converter"
            },
            {
              "text": " switches text among uppercase, lowercase, title case, sentence case, camelCase, PascalCase, snake_case and kebab-case. Sentence case follows English punctuation only, and the code styles drop punctuation between words, so check the result before it goes into a CMS or a codebase."
            }
          ],
          "id": "tool-case-converter"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Which sentences did the editor actually change? Paste the original and the revision into "
            },
            {
              "text": "Text Diff Checker",
              "href": "/tools/text-diff"
            },
            {
              "text": " and it marks added, removed and unchanged blocks, by line or by word. Word mode suits a sentence edited in place. Each side must stay under 200,000 characters, and it can't merge files or open Word documents."
            }
          ],
          "id": "tool-text-diff"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "One draft, three spellings of the same name — fix them in one pass. "
            },
            {
              "text": "Find and Replace",
              "href": "/tools/find-and-replace"
            },
            {
              "text": " swaps the first match or every match, with or without matching letter case, so \"ana\" and \"Ana\" both become \"Ana.\" It's plain text matching without word boundaries, so replacing \"art\" can also change \"party.\" For real pattern matching, use "
            },
            {
              "text": "Regex Tester",
              "href": "#tool-regex-tester"
            },
            {
              "text": "."
            }
          ],
          "id": "tool-find-and-replace"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Copy from a PDF and the text often arrives chopped into short lines. "
            },
            {
              "text": "Remove Line Breaks",
              "href": "/tools/remove-line-breaks"
            },
            {
              "text": " joins wrapped lines with spaces or deletes the breaks, and a blank line can keep paragraphs apart. It can't tell a wrapped sentence from a list, so check bullets afterwards. Pair it with "
            },
            {
              "text": "PDF to Text",
              "href": "#tool-pdf-to-text"
            },
            {
              "text": " for the full clean-up."
            }
          ],
          "id": "tool-remove-line-breaks"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Invoices and contracts still want numbers spelled out. "
            },
            {
              "text": "Number to Words",
              "href": "/tools/number-to-words"
            },
            {
              "text": " writes whole numbers from -999,999,999 to 999,999,999 in English, so 1,234 becomes one thousand two hundred thirty-four, and it can read simple English number words back. Decimals and billions aren't supported."
            }
          ],
          "id": "tool-number-to-words"
        }
      ]
    },
    {
      "id": "clean",
      "headingId": "clean-h",
      "heading": "Clean Lists and Convert Text",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Lists from emails, spreadsheets and logs get messy in predictable ways: repeats, stray spaces and the wrong order. Each tool below fixes one thing, so they're easy to chain."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Paste a mailing list from three sources and you'll see the repeats. "
            },
            {
              "text": "Duplicate Line Remover",
              "href": "/tools/duplicate-line-remover"
            },
            {
              "text": " keeps the first copy of each line, in the order you pasted. With case-insensitive matching and trimming on, \"apple\" and \"Apple\" count as one, and the first spelling stays. Input over 400,000 characters is refused."
            }
          ],
          "id": "tool-duplicate-line-remover"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Logs and exports leave stray indentation behind. "
            },
            {
              "text": "Whitespace Remover",
              "href": "/tools/whitespace-remover"
            },
            {
              "text": " trims lines, collapses spaces, converts tabs to 2 or 4 spaces and removes or collapses blank lines, but only for the options you switch on. Run it before "
            },
            {
              "text": "Line Sorter",
              "href": "#tool-line-sorter"
            },
            {
              "text": " so invisible spaces don't scramble the order."
            }
          ],
          "id": "tool-whitespace-remover"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Skip the spreadsheet when you just need a list sorted. "
            },
            {
              "text": "Line Sorter",
              "href": "/tools/line-sorter"
            },
            {
              "text": " sorts A to Z, Z to A, by a leading number or by line length, and equal lines keep their original order. In numeric mode 10 correctly comes after 2, and lines with no leading number go last."
            }
          ],
          "id": "tool-line-sorter"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "When everyone can say \"line 14,\" reviewing a script or poem gets easier. "
            },
            {
              "text": "Add Line Numbers",
              "href": "/tools/add-line-numbers"
            },
            {
              "text": " puts a number before each line, with a start number and separator you choose, so \"First line\" becomes \"1. First line.\" A trailing line break creates an empty last line, and that gets a number too."
            }
          ],
          "id": "tool-add-line-numbers"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Layout tests need filler text fast. "
            },
            {
              "text": "Text Repeater",
              "href": "/tools/text-repeater"
            },
            {
              "text": " repeats a word, phrase or line from 1 to 200 times, with nothing, a space or a new line between copies. The word \"ha\" three times with spaces gives \"ha ha ha.\" The source can be 5,000 characters and the joined result 100,000."
            }
          ],
          "id": "tool-text-repeater"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Mockups are easier to judge when the text blocks look full. "
            },
            {
              "text": "Lorem Ipsum Generator",
              "href": "/tools/lorem-ipsum-generator"
            },
            {
              "text": " makes placeholder paragraphs, sentences or words from a fixed Latin list, up to 20 paragraphs, 50 sentences or 500 words per request. It's for layouts only, so swap in real copy before anything is published."
            }
          ],
          "id": "tool-lorem-ipsum-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Chapter headings and film credits still lean on Roman numerals. "
            },
            {
              "text": "Roman Numeral Converter",
              "href": "/tools/roman-numeral-converter"
            },
            {
              "text": " converts 1 through 3999 to standard numerals and back, so 1994 becomes MCMXCIV. Zero, negatives and larger numbers are rejected, as are numerals not written in standard form."
            }
          ],
          "id": "tool-roman-numeral-converter"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "SOS is three short signals, three long, then three short. "
            },
            {
              "text": "Morse Code Translator",
              "href": "/tools/morse-code"
            },
            {
              "text": " translates letters A to Z and digits 0 to 9 into International Morse and back, with spaces between letters and a slash between words. Punctuation and other alphabets aren't converted, and an unknown pattern is rejected."
            }
          ],
          "id": "tool-morse-code"
        }
      ]
    },
    {
      "id": "news",
      "headingId": "news-h",
      "heading": "Get News Out Faster",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "News writers work against the clock — and against their own certainty. These four free AI tools help with the mechanical desk work: translating, shortening, smoothing and sanity-checking. Each has buttons that call Gemini, Google's AI model, so read the privacy section before you paste an unpublished story. Nothing here publishes anything; an editor still decides."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "An Urdu wire story lands just before deadline and the English page needs it now. "
            },
            {
              "text": "Urdu News Translator",
              "href": "/tools/urdu-news-translator"
            },
            {
              "text": " produces three English drafts from pasted Urdu: Brief (who, what, when, where), Medium (adds the main quote and the key date or figure) and Full (every sentence). A fact check compares each draft with the Urdu, looking at digits, quotation marks, length and a glossary of Pakistani names. It only drafts: it can miss a number written as a word, so an editor must approve the result."
            }
          ],
          "id": "tool-urdu-news-translator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "You've got a 900-word draft and a 600-word slot. "
            },
            {
              "text": "AI Article Compressor",
              "href": "/tools/ai-article-compressor"
            },
            {
              "text": " shortens it in your browser or with Gemini. Light swaps wordy phrases, so \"in order to finish\" becomes \"to finish\", while Medium and Strong also drop repeated sentences. It needs at least 12 words, and cutting a sentence can change the meaning, so read the result before you file."
            }
          ],
          "id": "tool-ai-article-compressor"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Stock phrases make a draft sound like everyone else's. "
            },
            {
              "text": "AI Text Humanizer",
              "href": "/tools/ai-text-humanizer"
            },
            {
              "text": " has two buttons: Rewrite text swaps a fixed list of stock phrases for plainer wording in your browser, and Humanize with AI sends the draft to Gemini for a rewrite. It's an editing aid, not a way to hide how a draft was written, and it doesn't try to beat any detector. Rewrite needs 12 words, and either button accepts 4,000 characters at most."
            }
          ],
          "id": "tool-ai-text-humanizer"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Editors sometimes wonder if a freelancer's draft is just repetitive. "
            },
            {
              "text": "AI Article Detector",
              "href": "/tools/ai-article-detector"
            },
            {
              "text": " reports sentence length, how much those lengths vary, vocabulary spread and repeated short phrases, under the heading Writing pattern analysis. That's the whole claim: it returns no percentage and no verdict, so it isn't proof of authorship and shouldn't decide anything about a person. The browser check needs 40 words, and Analyze with AI sends the text to Gemini."
            }
          ],
          "id": "tool-ai-article-detector"
        }
      ]
    },
    {
      "id": "prompts",
      "headingId": "prompts-h",
      "heading": "Write Better Prompts for AI",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "A good prompt names the topic, the goal, the audience and the format. These three free AI tools build that structure for you. Two of them only write prompts for images and video — they don't produce either — which is easy to miss from the names."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Blank prompt boxes invite vague answers. "
            },
            {
              "text": "AI Prompt Generator",
              "href": "/tools/ai-prompt-generator"
            },
            {
              "text": " turns topic, goal, audience, tone and format fields into one prompt you can copy. A preset fills the style fields only, so you still have to say what the piece is about. Generate with AI rewrites the prompt through Gemini but doesn't run it."
            }
          ],
          "id": "tool-ai-prompt-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Don't let the name fool you — "
            },
            {
              "text": "Prompt to Image Generator",
              "href": "/tools/prompt-to-image"
            },
            {
              "text": " writes a detailed prompt for an image model (subject, place, light, framing and an optional negative prompt). It doesn't draw anything, because no image generator is connected. A product shot might use \"a steel water bottle\", the Product photography preset, 1:1 and a negative prompt of extra logos, people, cluttered table. Paste the result into the image tool you prefer."
            }
          ],
          "id": "tool-prompt-to-image"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Try to describe a whole story in one video prompt and it usually fails. "
            },
            {
              "text": "Prompt to Video Generator",
              "href": "/tools/prompt-to-video"
            },
            {
              "text": " writes a one-shot description covering who or what is in frame, the action, the camera move and the duration. It doesn't render or download video. A ceramic mug with rising steam, an orbiting camera and studio light is a typical input."
            }
          ],
          "id": "tool-prompt-to-video"
        }
      ]
    },
    {
      "id": "links",
      "headingId": "links-h",
      "heading": "Build Links, QR Codes and Tracking",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Analytics can tell you that people visited, but not which post sent them unless the link says so. UTM parameters are labels added to the end of a URL: "
            },
            {
              "text": "utm_source",
              "code": true
            },
            {
              "text": " names the platform, "
            },
            {
              "text": "utm_medium",
              "code": true
            },
            {
              "text": " the channel and "
            },
            {
              "text": "utm_campaign",
              "code": true
            },
            {
              "text": " the promotion. Google Analytics, Google's free analytics service, reads them when someone lands on your site, as Google's help pages explain."
            }
          ]
        },
        {
          "type": "pre",
          "text": "https://example.com/offer?utm_source=newsletter&utm_medium=email&utm_campaign=spring_launch"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Keep the names lowercase and consistent, because Google Analytics treats \"Email\" and \"email\" as different values."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Build the tagged link once, then reuse it everywhere. "
            },
            {
              "text": "UTM Builder",
              "href": "/tools/utm-builder"
            },
            {
              "text": " is a free UTM builder: enter a URL plus source, medium and campaign, with optional term and content, and it returns the tagged link. Blank fields are left off, parameters already on your link are kept, and values are URL-encoded. It only builds the link, so it doesn't shorten the address or record a visit."
            }
          ],
          "id": "tool-utm-builder"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Read a long link before you share it. "
            },
            {
              "text": "URL Parser",
              "href": "/tools/url-parser"
            },
            {
              "text": " splits an absolute http or https URL into protocol, host, port, path, fragment and every query parameter, one per row, and it keeps duplicate and empty keys. Everything after the # is the fragment, not another parameter. The URL is parsed in your browser and never opened."
            }
          ],
          "id": "tool-url-parser"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "One space or ampersand inside a query value and the link breaks. "
            },
            {
              "text": "URL Encoder",
              "href": "/tools/url-encoder"
            },
            {
              "text": " percent-encodes text with encodeURIComponent, so \"a b&c\" becomes "
            },
            {
              "text": "a%20b%26c",
              "code": true
            },
            {
              "text": ", and it decodes the reverse. Percent-encoding only makes characters safe for a URL. It isn't encryption, and a half-finished sequence such as %E0 is rejected on decode."
            }
          ],
          "id": "tool-url-encoder"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "That post titled \"How to Compress an Image Without Losing Quality\" still needs a tidy address. "
            },
            {
              "text": "Slug Generator",
              "href": "/tools/slug-generator"
            },
            {
              "text": " lowercases it, strips Latin accents, joins the words with hyphens and returns "
            },
            {
              "text": "how-to-compress-an-image-without-losing-quality",
              "code": true
            },
            {
              "text": ". Letters from other scripts are kept rather than deleted, and the tool can't tell whether the slug is already used on your site."
            }
          ],
          "id": "tool-slug-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Put a link on a poster, menu or business card and people need a way to scan it. "
            },
            {
              "text": "QR Code Generator",
              "href": "/tools/qr-code-generator"
            },
            {
              "text": " is a free QR code generator that turns a URL or up to 1,200 characters of text into a 320-pixel PNG. The data sits in the pattern itself, so there's no redirect service, but the page can't count scans. Keep the text short, because a long string makes a denser code that some cameras miss."
            }
          ],
          "id": "tool-qr-code-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "One scan and cafe guests join the Wi-Fi. "
            },
            {
              "text": "QR Code Generator Pro",
              "href": "/tools/qr-code-generator-pro"
            },
            {
              "text": " builds QR codes for Wi-Fi, email, phone, SMS, vCard contacts and plain text, with color and error-correction controls. A network named Cafe is encoded as "
            },
            {
              "text": "WIFI:T:WPA;S:Cafe;P:Password;;",
              "code": true
            },
            {
              "text": ". The Wi-Fi password sits inside the code, so anyone who scans it can read it."
            }
          ],
          "id": "tool-qr-code-generator-pro"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Should you open the code on that flyer? "
            },
            {
              "text": "QR Code Scanner",
              "href": "/tools/qr-code-scanner"
            },
            {
              "text": " reads the first QR code from your camera or an uploaded PNG or JPG and shows the text before you decide. The camera stays off until you press Start camera, and a detected URL is displayed first, with opening it as a separate step. It decodes QR codes only, so use it to test your own codes from "
            },
            {
              "text": "QR Code Generator",
              "href": "#tool-qr-code-generator"
            },
            {
              "text": " before printing."
            }
          ],
          "id": "tool-qr-code-scanner"
        }
      ]
    },
    {
      "id": "dates",
      "headingId": "dates-h",
      "heading": "Plan Dates, Times and Ages",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Deadlines and schedules fail on small arithmetic — a time zone, a weekend, a leap year. These six tools handle the calendar math with the clock and time-zone data already in your browser."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "That log line says 1710000000 — and nobody knows the date. "
            },
            {
              "text": "Unix Timestamp Converter",
              "href": "/tools/timestamp-converter"
            },
            {
              "text": " converts Unix seconds or milliseconds to a date and back. A Unix timestamp counts from 1 January 1970 at 00:00:00 UTC, so 1710000000 seconds is 2024-03-09T16:00:00.000Z. Choose the unit carefully, because milliseconds typed as seconds land centuries away."
            }
          ],
          "id": "tool-timestamp-converter"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Noon in New York isn't noon in London. "
            },
            {
              "text": "Time Zone Converter",
              "href": "/tools/time-zone-converter"
            },
            {
              "text": " converts a date and time between zones, and because it uses your browser's time-zone data, daylight saving is included: 12:00 on 15 June 2024 in New York is 17:00 in London. A time that doesn't exist when clocks spring forward is rejected, and the earlier of two repeated hours is shown when clocks fall back."
            }
          ],
          "id": "tool-time-zone-converter"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "How many days until the deadline? "
            },
            {
              "text": "Date Difference Calculator",
              "href": "/tools/date-difference-calculator"
            },
            {
              "text": " counts days, weeks and a calendar span in years, months and days between two dates. From 1 March to 1 April in a non-leap year that's 31 days, or 4 weeks and 3 days. Months vary in length, so one month isn't always 30 days, and time of day is ignored."
            }
          ],
          "id": "tool-date-difference-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "When the contract says \"within five business days,\" count them carefully. "
            },
            {
              "text": "Business Days Calculator",
              "href": "/tools/business-days-calculator"
            },
            {
              "text": " counts Monday to Friday between two dates, and you can exclude holidays you choose. There's no built-in country holiday calendar, so a holiday counts as a working day unless you leave it out. The span 1 to 5 January 2024 is five business days."
            }
          ],
          "id": "tool-business-days-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Timesheets deal in hours and minutes, not decimals. "
            },
            {
              "text": "Time Calculator",
              "href": "/tools/time-calculator"
            },
            {
              "text": " adds or subtracts blocks of time, so 2 hours 30 minutes plus 1 hour 45 minutes is 4 hours 15 minutes, or 255 minutes. It's pure duration arithmetic with no clock, date or time zone, and it accepts whole numbers only."
            }
          ],
          "id": "tool-time-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Don't just divide days by 365 — birth dates need real calendar math. "
            },
            {
              "text": "Age Calculator",
              "href": "/tools/age-calculator"
            },
            {
              "text": " counts whole years, then months, then days from a date of birth to today or another date you pick, and shows the total number of days. It follows the calendar, including leap days. It's calendar arithmetic, not a medical or legal age."
            }
          ],
          "id": "tool-age-calculator"
        }
      ]
    },
    {
      "id": "website",
      "headingId": "website-h",
      "heading": "Set Up and Check a Website",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Free SEO tools can write the tags and files that help search engines and social apps understand a page, but they can't tell you how that page ranks. SEO, short for search engine optimization, means making pages easy for search engines to find and understand. For performance data you need Google Search Console, Google's free report on how your site appears in Google Search."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Your one-page site can look fine and still say nothing in search results. "
            },
            {
              "text": "Meta Tag Generator",
              "href": "/tools/meta-tag-generator"
            },
            {
              "text": " is a free meta tag generator that writes title, description, robots, canonical, Open Graph and Twitter tags as HTML to paste into the head. Google sets no official limit for descriptions and may rewrite the snippet, so aim for roughly 160 characters, such as "
            },
            {
              "text": "<meta name=\"description\" content=\"Free tools for PDFs, images and text. No signup.\">",
              "code": true
            },
            {
              "text": "."
            }
          ],
          "id": "tool-meta-tag-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Paste a link into a chat and get a blank card? You can catch that early. "
            },
            {
              "text": "Open Graph Preview",
              "href": "/tools/open-graph-preview"
            },
            {
              "text": " fetches a public page and shows the title, description, image and Twitter card it finds. Open Graph is the tag set that social apps read. This is one of two places where something leaves your browser: the URL is sent to Tools Star Hub so the server can request the page, and private or local addresses are rejected."
            }
          ],
          "id": "tool-open-graph-preview"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Keep crawlers out of the staging folder. "
            },
            {
              "text": "Robots.txt Generator",
              "href": "/tools/robots-txt-generator"
            },
            {
              "text": " writes robots.txt text from user-agent groups, Allow and Disallow lines and an optional sitemap URL, so "
            },
            {
              "text": "User-agent: *",
              "code": true
            },
            {
              "text": " with "
            },
            {
              "text": "Disallow: /admin",
              "code": true
            },
            {
              "text": " asks crawlers to skip /admin. A robots.txt file asks well-behaved crawlers to stay away. It isn't access control, so don't rely on it to hide private pages."
            }
          ],
          "id": "tool-robots-txt-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Tabs without an icon look unfinished. "
            },
            {
              "text": "Favicon Generator",
              "href": "/tools/favicon-generator"
            },
            {
              "text": " draws a one- or two-letter icon on a flat color and downloads PNGs at 16, 32 and 180 pixels plus an ICO holding the 16 and 32 versions. Google recommends a square favicon larger than 48 by 48 pixels for search results, so use the 180-pixel PNG there. Colors must be 6-digit hex, and it makes letter badges, not logos."
            }
          ],
          "id": "tool-favicon-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Fewer bytes of HTML means less to send. "
            },
            {
              "text": "HTML Minifier",
              "href": "/tools/html-minifier"
            },
            {
              "text": " removes comments and collapses spaces between tags, leaving pre, textarea, script and style content alone. It's conservative, but markup that depends on spacing elsewhere can still change, so compare the page afterwards. Input over 400,000 characters is refused."
            }
          ],
          "id": "tool-html-minifier"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "When you need a stylesheet trimmed without rewriting it, "
            },
            {
              "text": "CSS Minifier",
              "href": "/tools/css-minifier"
            },
            {
              "text": " reads it token by token, drops comments and spare spaces, and keeps strings, url() values and calc() spacing intact, so "
            },
            {
              "text": ".hero { color: #2563eb; }",
              "code": true
            },
            {
              "text": " becomes "
            },
            {
              "text": ".hero{color:#2563eb;}",
              "code": true
            },
            {
              "text": ". It doesn't merge selectors or add vendor prefixes, and it refuses more than 400,000 characters."
            }
          ],
          "id": "tool-css-minifier"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Shrinking a script with find-and-replace is how bugs get shipped. "
            },
            {
              "text": "JavaScript Minifier",
              "href": "/tools/javascript-minifier"
            },
            {
              "text": " uses Terser in your browser to parse, compress and mangle the code, and it never runs it. TypeScript or unreadable JavaScript returns an error instead of a guess. Test the output anyway, because shorter code is still code."
            }
          ],
          "id": "tool-javascript-minifier"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Want to show a tag in a tutorial instead of running it? Encode it. "
            },
            {
              "text": "HTML Encoder / Decoder",
              "href": "/tools/html-encoder"
            },
            {
              "text": " escapes characters so "
            },
            {
              "text": "<div>",
              "code": true
            },
            {
              "text": " becomes "
            },
            {
              "text": "&lt;div&gt;",
              "code": true
            },
            {
              "text": ", turns common entities back into characters and never executes the markup. An uncommon named entity can stay as typed when decoding."
            }
          ],
          "id": "tool-html-encoder"
        }
      ]
    },
    {
      "id": "code",
      "headingId": "code-h",
      "heading": "Work With Code and Data",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Free developer tools earn their keep on quick jobs: reformatting, converting and testing a pattern. They run in your browser and never touch your repository."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Sometimes README text needs to become page markup. "
            },
            {
              "text": "Markdown to HTML",
              "href": "/tools/markdown-to-html"
            },
            {
              "text": " converts headings, emphasis, links, lists, code fences and simple tables into HTML source. Raw HTML in the Markdown is escaped, javascript: links are dropped, and there's no rendered preview. To go the other way, use "
            },
            {
              "text": "HTML to Markdown",
              "href": "#tool-html-to-markdown"
            },
            {
              "text": "."
            }
          ],
          "id": "tool-markdown-to-html"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Got a CMS export as HTML and need a .md file? "
            },
            {
              "text": "HTML to Markdown",
              "href": "/tools/html-to-markdown"
            },
            {
              "text": " maps headings, paragraphs, links, emphasis, lists, images and tables to Markdown and skips script, style and iframe blocks. Nested layouts can flatten, so it's a practical subset rather than a full HTML engine."
            }
          ],
          "id": "tool-html-to-markdown"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Looks right on paper and still misses in practice? "
            },
            {
              "text": "Regex Tester",
              "href": "/tools/regex-tester"
            },
            {
              "text": " runs a JavaScript regular expression on pasted text and lists the match count, matched text, start positions and capture groups. The pattern "
            },
            {
              "text": "\\d+",
              "code": true
            },
            {
              "text": " with the g flag finds both numbers in \"Order 14 and order 3\". It uses JavaScript's engine, which differs from some others, and patterns over 300 characters are rejected."
            }
          ],
          "id": "tool-regex-tester"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "When an API response lands as one long line, "
            },
            {
              "text": "JSON Formatter",
              "href": "/tools/json-formatter"
            },
            {
              "text": " pretty-prints, minifies or validates JSON with the browser's parser and shows the position where parsing failed. JSON needs double quotes, no comments and no trailing commas, and documents over 750,000 characters are rejected. To get a spreadsheet, continue with "
            },
            {
              "text": "JSON to CSV",
              "href": "#tool-json-to-csv"
            },
            {
              "text": "."
            }
          ],
          "id": "tool-json-formatter"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Spreadsheets won't read JSON as-is. "
            },
            {
              "text": "JSON to CSV",
              "href": "/tools/json-to-csv"
            },
            {
              "text": " turns an array of objects into CSV with a header row and quotes any cell containing commas, quotes or line breaks. Nested objects aren't flattened into extra columns, and an array of plain numbers is rejected."
            }
          ],
          "id": "tool-json-to-csv"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Going the other way starts with a header row. "
            },
            {
              "text": "CSV to JSON",
              "href": "/tools/csv-to-json"
            },
            {
              "text": " converts CSV into a JSON array of objects, spaced or compact, and every value stays a string because CSV cells are text. It splits on commas only, so a semicolon-separated file won't work, and a row longer than the header stops the conversion."
            }
          ],
          "id": "tool-csv-to-json"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Test data needs IDs that won't collide. "
            },
            {
              "text": "UUID Generator",
              "href": "/tools/uuid-generator"
            },
            {
              "text": " creates 1 to 100 random version 4 UUIDs at a time. In a v4 UUID, 122 of the 128 bits are random, according to RFC 9562, which is why a collision is extremely unlikely. They aren't sequential keys or passwords, and the page can't tell whether a value already exists elsewhere."
            }
          ],
          "id": "tool-uuid-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "At 2 a.m., cron schedules are easy to misread. "
            },
            {
              "text": "Cron Expression Generator",
              "href": "/tools/cron-expression-generator"
            },
            {
              "text": " builds a five-field expression (minute, hour, day of month, month, day of week) or reads one back in plain English. For example, "
            },
            {
              "text": "*/15 * * * *",
              "code": true
            },
            {
              "text": " means every 15 minutes and "
            },
            {
              "text": "0 9 * * 1-5",
              "code": true
            },
            {
              "text": " means 09:00 on weekdays. Here Sunday is 0, names such as MON are rejected, and there's no seconds field."
            }
          ],
          "id": "tool-cron-expression-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "One accidental commit of node_modules and the repository balloons. "
            },
            {
              "text": ".gitignore Generator",
              "href": "/tools/gitignore-generator"
            },
            {
              "text": " writes a .gitignore from ready-made templates plus up to 50 custom patterns, each up to 200 characters, with a heading for every section. It only creates text and doesn't touch your repository, and the templates are a starter set, not every language or editor."
            }
          ],
          "id": "tool-gitignore-generator"
        }
      ]
    },
    {
      "id": "security",
      "headingId": "security-h",
      "heading": "Protect Passwords and Data",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Security tools invite wrong assumptions, so settle two points first: encoding isn't encryption, and a hash isn't an encrypted copy. Neither one keeps a secret on its own."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Reuse one password and one breach becomes five. "
            },
            {
              "text": "Password Generator",
              "href": "/tools/password-generator"
            },
            {
              "text": " creates passwords from 8 to 64 characters using the character types you choose, and it can leave out look-alike characters. The strength label estimates from length and character set, and it can't know about reuse, phishing or a breached site. NIST's current password guidance asks for length and supports password managers instead of forced character mixes."
            }
          ],
          "id": "tool-password-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Curious how a password scores on length and character mix alone? "
            },
            {
              "text": "Password Strength Checker",
              "href": "/tools/password-strength-checker"
            },
            {
              "text": " rates a typed password Short, Moderate or Strong from its length and the character types it uses, so the lowercase word \"password\" scores about 38 bits and rates Short. It doesn't look up breaches, so a long, well-known phrase can score better than it deserves. It runs in your browser, but as a habit, test sample passwords rather than one you use today."
            }
          ],
          "id": "tool-password-strength-checker"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Support asks for the SHA-256 of a string — here's the quick way. "
            },
            {
              "text": "Hash Generator",
              "href": "/tools/hash-generator"
            },
            {
              "text": " creates a SHA-256, SHA-384 or SHA-512 digest of text you type. A hash is a one-way fingerprint: the same input always gives the same output, and you can't turn it back into the text. It isn't encryption, it hashes text rather than files, and plain SHA hashes are fast to compute, so don't use one alone to store passwords."
            }
          ],
          "id": "tool-hash-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Systems built for text need bytes turned into plain letters and digits — that's Base64, and the result is about a third larger. "
            },
            {
              "text": "Base64 Encoder",
              "href": "/tools/base64-encoder"
            },
            {
              "text": " encodes text to Base64 and decodes it back using UTF-8, so \"Hi\" becomes "
            },
            {
              "text": "SGk=",
              "code": true
            },
            {
              "text": ". Anyone can decode it, so Base64 is encoding rather than security, and it must never be used to hide a password."
            }
          ],
          "id": "tool-base64-encoder"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "JSON Web Tokens come in three dot-separated parts: header, payload and signature. "
            },
            {
              "text": "JWT Decoder",
              "href": "/tools/jwt-decoder"
            },
            {
              "text": " reads the first two and shows them as JSON. It doesn't verify the signature or fetch a key, so a decoded token proves nothing about who issued it. In a signed token the payload is only encoded, so don't put secrets in one."
            }
          ],
          "id": "tool-jwt-decoder"
        }
      ]
    },
    {
      "id": "maths",
      "headingId": "maths-h",
      "heading": "Everyday Maths and Quick Checks",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Free online calculators work best when the question is small and the numbers are yours. Each result here is plain arithmetic on what you type — none of these tools looks up tax rates, prices or local rules."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "What is 15% of 80? "
            },
            {
              "text": "Percentage Calculator",
              "href": "/tools/percentage-calculator"
            },
            {
              "text": " answers that, works out what percent one number is of another and shows what a value becomes after a percent increase or decrease. Fifteen percent of 80 is 12. Dividing by zero is rejected in the what-percent mode, and sale prices, tax and tips each have their own calculators."
            }
          ],
          "id": "tool-percentage-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Watch what happens when a price goes from 80 to 100, then back to 80. "
            },
            {
              "text": "Percentage Change Calculator",
              "href": "/tools/percentage-change-calculator"
            },
            {
              "text": " shows the first move as a 25% increase and the second as a 20% decrease, because each percentage is measured from a different starting number. An original value of 0 is rejected, since the change is divided by it."
            }
          ],
          "id": "tool-percentage-change-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Is 20% off 50 really 40? "
            },
            {
              "text": "Discount Calculator",
              "href": "/tools/discount-calculator"
            },
            {
              "text": " confirms it: the discount is 10 and the final price is 40. Type plain numbers, because a currency symbol is rejected, and the discount can't exceed 100%. Tax isn't part of the sum, so add it with "
            },
            {
              "text": "Sales Tax Calculator",
              "href": "#tool-sales-tax-calculator"
            },
            {
              "text": "."
            }
          ],
          "id": "tool-discount-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "The shelf price and the checkout total aren't the same once tax is in. "
            },
            {
              "text": "Sales Tax Calculator",
              "href": "/tools/sales-tax-calculator"
            },
            {
              "text": " takes a price and the rate you supply, then shows the tax and the final price, so 8% on 49.99 is 4.00 in tax and 53.99 in total. It doesn't look up a city, state or country rate, and it doesn't split tax across several items."
            }
          ],
          "id": "tool-sales-tax-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Split a dinner bill and it rarely comes out even. "
            },
            {
              "text": "Tip Calculator",
              "href": "/tools/tip-calculator"
            },
            {
              "text": " takes the bill, a tip percentage and the number of people, then shows the tip, the total and each person's share. An 84 bill at 18% for two people is a 15.12 tip, 99.12 in total and 49.56 each. It can't know about a service charge already on the bill."
            }
          ],
          "id": "tool-tip-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Test scores, ratings or daily sales need a typical value, not just a total. "
            },
            {
              "text": "Average Calculator",
              "href": "/tools/average-calculator"
            },
            {
              "text": " takes up to 1,000 numbers separated by commas, spaces or new lines and reports the count, mean, median and mode. The list "
            },
            {
              "text": "1, 2, 2, 3",
              "code": true
            },
            {
              "text": " has a mean of 2, a median of 2 and a mode of 2. Values aren't weighted, so for course grades use "
            },
            {
              "text": "GPA Calculator",
              "href": "#tool-gpa-calculator"
            },
            {
              "text": "."
            }
          ],
          "id": "tool-average-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Kilograms on the shipment, Fahrenheit on the forecast, feet on the table — "
            },
            {
              "text": "Unit Converter",
              "href": "/tools/unit-converter"
            },
            {
              "text": " converts length, weight and temperature: 1 meter is about 3.28084 feet, and 0°C is 32°F or 273.15 K. Currency, area and volume aren't included, so cups to milliliters won't work here."
            }
          ],
          "id": "tool-unit-converter"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Five raffle winners need more than a shrug to feel fair. "
            },
            {
              "text": "Random Number Generator",
              "href": "/tools/random-number-generator"
            },
            {
              "text": " draws 1 to 200 integers or decimals between bounds you set, and unique mode, which works for whole numbers only, draws without repeats. Asking for 11 unique values from 1 to 10 is rejected. It's for casual draws, not lotteries or keys."
            }
          ],
          "id": "tool-random-number-generator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Worth driving, or not? "
            },
            {
              "text": "Fuel Cost Calculator",
              "href": "/tools/fuel-cost-calculator"
            },
            {
              "text": " estimates fuel used and cost from distance, fuel economy and a price you type. A 100-mile trip at 25 miles per gallon uses 4 gallons, which is 16 dollars at 4 dollars a gallon. Kilometers and liters per 100 km work too, but it doesn't look up live prices or account for traffic."
            }
          ],
          "id": "tool-fuel-cost-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Flooring and paint get priced by area, so measure first. "
            },
            {
              "text": "Square Footage Calculator",
              "href": "/tools/square-footage-calculator"
            },
            {
              "text": " multiplies length by width for each room and adds the rooms, showing square feet and square meters: a 10 by 10 foot room is 100 square feet, or 9.29 square meters. It measures rectangles only, so subtract closets and alcoves yourself."
            }
          ],
          "id": "tool-square-footage-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Before you apply, you'll often need a grade point average. "
            },
            {
              "text": "GPA Calculator",
              "href": "/tools/gpa-calculator"
            },
            {
              "text": " adds courses with a letter grade or grade points and a credit value, then divides total grade points by total credits. An A worth 3 credits and a B worth 1 credit give 3.75 on the page's 4.0 map. Schools don't all use the same scale, so check yours."
            }
          ],
          "id": "tool-gpa-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Not every tool here is serious work. "
            },
            {
              "text": "CPS Test",
              "href": "/tools/cps-test"
            },
            {
              "text": " measures clicks per second over 1, 5, 10, 15, 30 or 60 seconds, so 72 clicks in 10 seconds is 7.2 CPS. Scores depend on your mouse or screen, and the test can't detect auto clickers, so compare only with yourself on one device."
            }
          ],
          "id": "tool-cps-test"
        }
      ]
    },
    {
      "id": "money",
      "headingId": "money-h",
      "heading": "Money, Pay and Loan Estimates",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "These calculators estimate. They don't approve, quote or advise, and rates, taxes and lender rules change the real numbers. Use them to compare scenarios before you talk to a lender, an employer or an adviser — and read the limit in each entry."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Quote $20 an hour and you still want the yearly picture. "
            },
            {
              "text": "Hourly Wage Calculator",
              "href": "/tools/hourly-wage-calculator"
            },
            {
              "text": " turns an hourly rate and weekly schedule into weekly, monthly and annual pay, or a salary into an hourly rate. At 40 hours for 52 weeks, $20 an hour is $41,600 a year before overtime. It shows gross pay and ignores taxes, benefits and unpaid leave."
            }
          ],
          "id": "tool-hourly-wage-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "What lands in your account isn't the gross figure. "
            },
            {
              "text": "Paycheck Estimator",
              "href": "/tools/paycheck-estimator"
            },
            {
              "text": " estimates one paycheck and a year of pay from gross pay and the deductions you type, so 1,000 with 10 percent withholding gives 100 withheld and 900 net. The withholding is entirely your number. It uses no IRS, state or local tax tables, so it isn't an official tax calculation."
            }
          ],
          "id": "tool-paycheck-estimator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Small savings grow because interest earns interest. "
            },
            {
              "text": "Compound Interest Calculator",
              "href": "/tools/compound-interest-calculator"
            },
            {
              "text": " takes a starting amount, annual rate, period, compounding frequency and optional monthly contribution, then shows the ending balance, the interest and a simple-interest comparison. Ten thousand at 5% for 10 years compounded monthly ends near 16,470, against 15,000 with simple interest. Taxes, fees and rate changes aren't included."
            }
          ],
          "id": "tool-compound-interest-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Ten thousand in two years sounds huge until you break it down. "
            },
            {
              "text": "Savings Goal Calculator",
              "href": "/tools/savings-goal-calculator"
            },
            {
              "text": " works backward from a target, your current savings, a rate and a time, and estimates the contribution per period. At a 0% rate and nothing saved, 10,000 over 24 months is about 416.67 a month. The rate is your assumption, not a forecast."
            }
          ],
          "id": "tool-savings-goal-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Test the offer before you accept it. "
            },
            {
              "text": "Loan Calculator",
              "href": "/tools/loan-calculator"
            },
            {
              "text": " estimates the monthly payment on a fixed-rate installment loan from the amount, annual rate, term and an optional fee that isn't financed. A 20,000 loan at 7% over 5 years comes to about 396.02 a month and 3,761 in total interest. It isn't a lender's offer and doesn't cover variable rates."
            }
          ],
          "id": "tool-loan-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Buy a 400,000 home with 20% down and you're financing 320,000. "
            },
            {
              "text": "Mortgage Calculator",
              "href": "/tools/mortgage-calculator"
            },
            {
              "text": " estimates a fixed-rate payment from price, down payment, rate and term, with optional tax, insurance, HOA fees and PMI (private mortgage insurance) that stay at 0 until you enter them. It also models extra payments and compares 15-year with 30-year terms. It's an educational estimate, not a quote."
            }
          ],
          "id": "tool-mortgage-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "The sticker price isn't what you finance. "
            },
            {
              "text": "Auto Loan Calculator",
              "href": "/tools/auto-loan-calculator"
            },
            {
              "text": " accounts for a down payment, trade-in, a sales tax rate you enter, fees, add-ons and the APR (the yearly cost of borrowing), then shows the amount financed, the payment and the total cost. A 30,000 vehicle with 3,000 down and nothing else means 27,000 financed. Trade-in tax rules vary by place, so it doesn't assume one."
            }
          ],
          "id": "tool-auto-loan-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "You can look at income and debts the way a bank would. "
            },
            {
              "text": "Home Affordability Calculator",
              "href": "/tools/home-affordability-calculator"
            },
            {
              "text": " works backward from annual income, monthly debts, down payment, rate and housing costs to estimate a home price. With 120,000 income and 500 in monthly debt, a 36% target leaves about 3,100 a month for housing. It's a budget estimate, not an approval, because real limits depend on credit, location and loan type."
            }
          ],
          "id": "tool-home-affordability-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Three debts, one extra 100 — which balance gets it? "
            },
            {
              "text": "Debt Payoff Calculator",
              "href": "/tools/debt-payoff-calculator"
            },
            {
              "text": " compares payoff plans where extra money goes to the highest APR first or the smallest balance first. Enter each balance, APR and minimum payment. The month count is an estimate, not a calendar date, since lenders may apply payments differently."
            }
          ],
          "id": "tool-debt-payoff-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Keep paying the minimum and a balance can live for years. "
            },
            {
              "text": "Credit Card Payoff Calculator",
              "href": "/tools/credit-card-payoff-calculator"
            },
            {
              "text": " estimates the months to pay off one card and the interest from the APR, a minimum-payment percentage, a floor, a fixed payment and any extra amount. If a payment is less than or equal to the interest, the page says the balance wouldn't fall. Issuers use statement cycles and daily balances, so your statement will differ."
            }
          ],
          "id": "tool-credit-card-payoff-calculator"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Month-to-month rent is easy to compare; buying isn't. "
            },
            {
              "text": "Rent vs Buy Calculator",
              "href": "/tools/rent-vs-buy-calculator"
            },
            {
              "text": " sets rent paid over the years you choose beside the cash cost of buying, the remaining loan and the equity from the home-value change you enter. Rent growth and home values are assumptions, not forecasts, and after the loan ends, tax, insurance, HOA fees and maintenance continue."
            }
          ],
          "id": "tool-rent-vs-buy-calculator"
        }
      ]
    },
    {
      "id": "find",
      "headingId": "find-h",
      "heading": "Make Your Own Content Easier to Find",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "If you publish, a few habits help both search engines and AI assistants."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Three labels are worth defining. SEO means making pages easy for search engines to find and understand. AEO, answer engine optimization, means writing so a snippet or assistant can lift a clear answer."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "GEO, generative engine optimization, means making content clear enough to be cited in an AI-written summary. The last two are working labels, not official ranking systems."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Google's own guidance is modest on this. Its documentation says the best practices for SEO remain relevant for AI features in Search and that no special optimization, markup or AI text file is required. So the habits below are ordinary good writing:"
            }
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "Answer the question in the first sentence or two under each heading."
              }
            ]
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "Define names, products and places the first time you use them."
              }
            ]
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "Show who wrote the page and when it was last updated."
              }
            ]
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "Keep one topic per page and give it a descriptive title."
              }
            ]
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "Only state facts you can support. Invented numbers hurt trust faster than missing ones."
              }
            ]
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Several tools help with the mechanics: "
            },
            {
              "text": "Meta Tag Generator",
              "href": "#tool-meta-tag-generator"
            },
            {
              "text": " for the tags, "
            },
            {
              "text": "Slug Generator",
              "href": "#tool-slug-generator"
            },
            {
              "text": " for the address, "
            },
            {
              "text": "Word Counter",
              "href": "#tool-word-counter"
            },
            {
              "text": " for length and "
            },
            {
              "text": "Robots.txt Generator",
              "href": "#tool-robots-txt-generator"
            },
            {
              "text": " for crawler rules. None of them can promise a ranking, and that's the point of the next two sections."
            }
          ]
        }
      ]
    },
    {
      "id": "tested",
      "headingId": "tested-h",
      "heading": "How We Tested These Tools",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "On 23 October 2026 we opened every one of the 102 tools in a real browser, gave each one sample input and checked it on a phone-size screen. Ninety-five passed outright."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "The other seven use Gemini on some buttons: "
            },
            {
              "text": "Urdu News Translator",
              "href": "#tool-urdu-news-translator"
            },
            {
              "text": ", "
            },
            {
              "text": "AI Text Humanizer",
              "href": "#tool-ai-text-humanizer"
            },
            {
              "text": ", "
            },
            {
              "text": "AI Article Detector",
              "href": "#tool-ai-article-detector"
            },
            {
              "text": ", "
            },
            {
              "text": "AI Article Compressor",
              "href": "#tool-ai-article-compressor"
            },
            {
              "text": ", "
            },
            {
              "text": "AI Prompt Generator",
              "href": "#tool-ai-prompt-generator"
            },
            {
              "text": ", "
            },
            {
              "text": "Prompt to Image Generator",
              "href": "#tool-prompt-to-image"
            },
            {
              "text": " and "
            },
            {
              "text": "Prompt to Video Generator",
              "href": "#tool-prompt-to-video"
            },
            {
              "text": ". For these we tested the page controls, limits and in-browser modes, but not the live Gemini buttons, so we can't vouch for what Gemini returns."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "The testing found real bugs, and we fixed them. "
            },
            {
              "text": "PDF to JPG",
              "href": "#tool-pdf-to-jpg"
            },
            {
              "text": " and the Strong mode of "
            },
            {
              "text": "PDF Compressor",
              "href": "#tool-pdf-compressor"
            },
            {
              "text": " both had faults, and "
            },
            {
              "text": "UTM Builder",
              "href": "#tool-utm-builder"
            },
            {
              "text": " and "
            },
            {
              "text": "Hash Generator",
              "href": "#tool-hash-generator"
            },
            {
              "text": " overflowed on a narrow phone screen."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "The worked examples in this guide come from the tool pages and from that testing. We recalculated the loan and compound-interest figures separately, and the About page says calculators and converters are covered by an automated test suite with worked examples. We haven't tried every browser and device combination, so if a tool misbehaves on yours, tell us."
            }
          ]
        }
      ]
    },
    {
      "id": "cant",
      "headingId": "cant-h",
      "heading": "What These Tools Can't Do",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Tools Star Hub has no keyword research, rank tracking, analytics or social scheduling. Those jobs need data we don't have, and the free services below do them properly:"
            }
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "Google Search Console shows which searches bring people to your site and which pages Google has indexed."
              }
            ]
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "Google Analytics reports visits and campaign results, including the UTM labels you build with "
              },
              {
                "text": "UTM Builder",
                "href": "#tool-utm-builder"
              },
              {
                "text": "."
              }
            ]
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "Google Keyword Planner suggests keywords and search-volume ranges, and it may ask you to set up a Google Ads account first."
              }
            ]
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "Bing Webmaster Tools does for Bing what Search Console does for Google."
              }
            ]
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "Google Business Profile manages how a local business appears in Google Search and Maps."
              }
            ]
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Some limits are built into the tools themselves. "
            },
            {
              "text": "PDF to Text",
              "href": "#tool-pdf-to-text"
            },
            {
              "text": " has no OCR, "
            },
            {
              "text": "Word to PDF",
              "href": "#tool-word-to-pdf"
            },
            {
              "text": " drops images and styling, "
            },
            {
              "text": "Image to Text",
              "href": "#tool-image-to-text"
            },
            {
              "text": " reads English only, and "
            },
            {
              "text": "Prompt to Image Generator",
              "href": "#tool-prompt-to-image"
            },
            {
              "text": " and "
            },
            {
              "text": "Prompt to Video Generator",
              "href": "#tool-prompt-to-video"
            },
            {
              "text": " only write prompts. The calculators give general estimates, and nothing here is financial, legal, tax or medical advice."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Very large files can also be slow or fail on a phone with little memory, because the work happens on your device."
            }
          ]
        }
      ]
    },
    {
      "id": "privacy",
      "headingId": "privacy-h",
      "heading": "Where Does Your Data Go?",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "Most tools run in your browser, so files and pasted text stay on your device. Two kinds of tool send data away: the AI buttons send the text you enter to Google's Gemini model, and "
            },
            {
              "text": "Open Graph Preview",
              "href": "#tool-open-graph-preview"
            },
            {
              "text": " sends the URL you enter to Tools Star Hub so our server can fetch that page."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "The first run of "
            },
            {
              "text": "Image to Text",
              "href": "#tool-image-to-text"
            },
            {
              "text": " downloads its recognition engine, about 6.6 MB, and then reads the image locally. If you accept analytics cookies, visits to the site are measured with Google Analytics, which doesn't include the files or text you put into a tool."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "The "
            },
            {
              "text": "privacy policy",
              "href": "/privacy"
            },
            {
              "text": " has the full detail, and it's worth a read before you paste anything sensitive into an AI button."
            }
          ]
        }
      ]
    },
    {
      "id": "faq",
      "headingId": "faq-h",
      "heading": "Frequently Asked Questions",
      "blocks": [
        {
          "type": "faq",
          "items": [
            {
              "question": "Are these free digital tools really free?",
              "answer": [
                {
                  "text": "Yes — all 102 tools are free to use. There's no account and no payment step."
                }
              ]
            },
            {
              "question": "Do I need to sign up or create an account?",
              "answer": [
                {
                  "text": "No. Every tool opens and works without an account, and there's no login to remember."
                }
              ]
            },
            {
              "question": "Are my files uploaded when I use a tool?",
              "answer": [
                {
                  "text": "Usually not. Most tools run in your browser, so files and text stay on your device. The exceptions are the AI buttons, which send text to Google's Gemini, and "
                },
                {
                  "text": "Open Graph Preview",
                  "href": "#tool-open-graph-preview"
                },
                {
                  "text": ", which sends a URL to our server."
                }
              ]
            },
            {
              "question": "Which tool should a student start with?",
              "answer": [
                {
                  "text": "Begin with "
                },
                {
                  "text": "Word Counter",
                  "href": "#tool-word-counter"
                },
                {
                  "text": " for essay limits and "
                },
                {
                  "text": "GPA Calculator",
                  "href": "#tool-gpa-calculator"
                },
                {
                  "text": " for grades. When you need to hand work in, "
                },
                {
                  "text": "PDF Merger",
                  "href": "#tool-pdf-merger"
                },
                {
                  "text": " and "
                },
                {
                  "text": "Image to PDF",
                  "href": "#tool-image-to-pdf"
                },
                {
                  "text": " cover most submission forms."
                }
              ]
            },
            {
              "question": "How accurate are the calculators?",
              "answer": [
                {
                  "text": "They do exact arithmetic on the numbers you type, but money calculators are estimates. "
                },
                {
                  "text": "Loan Calculator",
                  "href": "#tool-loan-calculator"
                },
                {
                  "text": ", "
                },
                {
                  "text": "Mortgage Calculator",
                  "href": "#tool-mortgage-calculator"
                },
                {
                  "text": " and "
                },
                {
                  "text": "Paycheck Estimator",
                  "href": "#tool-paycheck-estimator"
                },
                {
                  "text": " leave out taxes, lender fees and rule changes, so treat the results as a way to compare scenarios — not as a quote."
                }
              ]
            },
            {
              "question": "What does AI Text Humanizer do, and what doesn't it do?",
              "answer": [
                {
                  "text": "AI Text Humanizer",
                  "href": "#tool-ai-text-humanizer"
                },
                {
                  "text": " swaps stock phrases for plainer wording in your browser, or sends the draft to Gemini for a rewrite. It's an editing aid. It isn't a way to hide how a draft was written, and it doesn't aim to beat any detector."
                }
              ]
            },
            {
              "question": "Does AI Article Detector prove a person used AI?",
              "answer": [
                {
                  "text": "No. "
                },
                {
                  "text": "AI Article Detector",
                  "href": "#tool-ai-article-detector"
                },
                {
                  "text": " reports writing patterns such as sentence length and repeated phrases. It gives no percentage and no verdict, so it can't prove who wrote something."
                }
              ]
            },
            {
              "question": "Can PDF to Text read scanned documents?",
              "answer": [
                {
                  "text": "Not directly. "
                },
                {
                  "text": "PDF to Text",
                  "href": "#tool-pdf-to-text"
                },
                {
                  "text": " extracts text that's already stored in the PDF and has no OCR. For a scan, convert the page with "
                },
                {
                  "text": "PDF to JPG",
                  "href": "#tool-pdf-to-jpg"
                },
                {
                  "text": " and try "
                },
                {
                  "text": "Image to Text",
                  "href": "#tool-image-to-text"
                },
                {
                  "text": ", then proofread the result."
                }
              ]
            },
            {
              "question": "Is Base64 or a hash a safe way to protect a password?",
              "answer": [
                {
                  "text": "No. "
                },
                {
                  "text": "Base64 Encoder",
                  "href": "#tool-base64-encoder"
                },
                {
                  "text": " only changes the form of the data, and anyone can reverse it. "
                },
                {
                  "text": "Hash Generator",
                  "href": "#tool-hash-generator"
                },
                {
                  "text": " makes a one-way fingerprint, which isn't encryption. Use a password manager and a service that stores passwords properly."
                }
              ]
            },
            {
              "question": "Can I do keyword research or rank tracking here?",
              "answer": [
                {
                  "text": "No. Use Google Search Console, Google Analytics, Google Keyword Planner or Bing Webmaster Tools for those jobs. They're free, and the section above explains what each one is for."
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "conclusion",
      "headingId": "conclusion-h",
      "heading": "Pick One Job and Start",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "You don't need all 102 tools. Most people need three or four. The quickest way to find yours is to pick the job you have today and open its section."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "If something here is wrong or unclear, tell us through the contact page and we'll fix the page."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Explore all tools",
              "href": "/tools"
            }
          ]
        }
      ]
    },
    {
      "id": "sources",
      "headingId": "sources-h",
      "heading": "Sources and Further Reading",
      "blocks": [
        {
          "type": "p",
          "spans": [
            {
              "text": "These are the outside pages we relied on or recommend. Each one was checked on 23 October 2026."
            }
          ]
        },
        {
          "type": "h3",
          "text": "Search and the web"
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "Google Search Central: SEO Starter Guide",
                "href": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
              }
            ],
            [
              {
                "text": "Google Search Central: AI features and your website",
                "href": "https://developers.google.com/search/docs/appearance/ai-features"
              }
            ],
            [
              {
                "text": "Google Search Central: How to write meta descriptions",
                "href": "https://developers.google.com/search/docs/appearance/snippet"
              }
            ],
            [
              {
                "text": "Google Search Central: Robots.txt introduction and guide",
                "href": "https://developers.google.com/search/docs/crawling-indexing/robots/intro"
              }
            ],
            [
              {
                "text": "Google Search Central: Creating helpful, reliable, people-first content",
                "href": "https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
              }
            ],
            [
              {
                "text": "Google Analytics Help: URL builders and campaign data",
                "href": "https://support.google.com/analytics/answer/10917952"
              }
            ],
            [
              {
                "text": "Google Search Console",
                "href": "https://search.google.com/search-console/about"
              }
            ],
            [
              {
                "text": "Google Keyword Planner",
                "href": "https://business.google.com/us/ad-tools/keyword-planner/"
              }
            ],
            [
              {
                "text": "Google Search Central: Favicon guidelines",
                "href": "https://developers.google.com/search/docs/appearance/favicon-in-search"
              }
            ],
            [
              {
                "text": "Bing Webmaster Tools",
                "href": "https://www.bing.com/webmasters/about"
              }
            ],
            [
              {
                "text": "The Open Graph protocol",
                "href": "https://ogp.me/"
              }
            ]
          ]
        },
        {
          "type": "h3",
          "text": "Standards and references"
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "W3C: Understanding WCAG 2 contrast (minimum)",
                "href": "https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
              }
            ],
            [
              {
                "text": "MDN: encodeURIComponent()",
                "href": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent"
              }
            ],
            [
              {
                "text": "MDN: Base64",
                "href": "https://developer.mozilla.org/en-US/docs/Glossary/Base64"
              }
            ],
            [
              {
                "text": "MDN: Crypto.getRandomValues()",
                "href": "https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues"
              }
            ],
            [
              {
                "text": "NIST SP 800-63B: Authentication and authenticator management",
                "href": "https://pages.nist.gov/800-63-4/sp800-63b.html"
              }
            ],
            [
              {
                "text": "RFC 9562: Universally Unique Identifiers (UUIDs)",
                "href": "https://www.rfc-editor.org/info/rfc9562/"
              }
            ],
            [
              {
                "text": "RFC 7519: JSON Web Token (JWT)",
                "href": "https://www.rfc-editor.org/info/rfc7519/"
              }
            ],
            [
              {
                "text": "RFC 3986: Uniform Resource Identifier (URI) syntax",
                "href": "https://www.rfc-editor.org/info/rfc3986/"
              }
            ],
            [
              {
                "text": "RFC 8259: The JSON data interchange format",
                "href": "https://www.rfc-editor.org/info/rfc8259/"
              }
            ],
            [
              {
                "text": "RFC 4180: Common format for CSV files",
                "href": "https://www.rfc-editor.org/info/rfc4180/"
              }
            ],
            [
              {
                "text": "NIST FIPS 180-4: Secure Hash Standard",
                "href": "https://csrc.nist.gov/pubs/fips/180-4/upd1/final"
              }
            ],
            [
              {
                "text": "Git documentation: gitignore",
                "href": "https://git-scm.com/docs/gitignore"
              }
            ],
            [
              {
                "text": "crontab(5) manual page (Debian)",
                "href": "https://manpages.debian.org/stable/cron/crontab.5.en.html"
              }
            ]
          ]
        }
      ]
    },
    {
      "id": "author",
      "headingId": "author-h",
      "heading": "About the Author and This Guide",
      "blocks": [
        {
          "type": "h3",
          "text": "Ali Ahmed"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Ali Ahmed runs Tools Star Hub, an independent website that offers free online tools for everyday tasks and short guides that explain the method. This guide was last updated on 23 October 2026 and describes all 102 tools as they stood that day."
            }
          ]
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "We don't list formal credentials, awards or user numbers here. We'd rather show the work: every tool opened and tested, each limit stated, and the sources above."
            }
          ]
        },
        {
          "type": "h3",
          "text": "Found a mistake?"
        },
        {
          "type": "p",
          "spans": [
            {
              "text": "Tell us through the "
            },
            {
              "text": "contact page",
              "href": "/contact"
            },
            {
              "text": ". Include the tool name, what you entered and what you expected, and we'll correct the page when the problem is confirmed."
            }
          ]
        },
        {
          "type": "ul",
          "items": [
            [
              {
                "text": "About Tools Star Hub",
                "href": "/about"
              }
            ],
            [
              {
                "text": "Contact",
                "href": "/contact"
              }
            ],
            [
              {
                "text": "Privacy policy",
                "href": "/privacy"
              }
            ]
          ]
        }
      ]
    }
  ],
  "cards": [
    {
      "category": "Tracking",
      "slug": "utm-builder",
      "name": "UTM Builder",
      "blurb": "Add utm_source, utm_medium and utm_campaign to any link."
    },
    {
      "category": "Tracking",
      "slug": "url-parser",
      "name": "URL Parser",
      "blurb": "Split a URL into its parts and list every query parameter."
    },
    {
      "category": "Tracking",
      "slug": "url-encoder",
      "name": "URL Encoder",
      "blurb": "Percent-encode text for a URL, or decode it back."
    },
    {
      "category": "Tracking",
      "slug": "slug-generator",
      "name": "Slug Generator",
      "blurb": "Turn a title into a clean, hyphenated permalink."
    },
    {
      "category": "Tracking",
      "slug": "qr-code-generator",
      "name": "QR Code Generator",
      "blurb": "Make a QR code from a URL or text and download the PNG."
    },
    {
      "category": "Tracking",
      "slug": "qr-code-generator-pro",
      "name": "QR Code Generator Pro",
      "blurb": "QR codes for Wi-Fi, email, phone, SMS and contacts, with colors."
    },
    {
      "category": "Tracking",
      "slug": "qr-code-scanner",
      "name": "QR Code Scanner",
      "blurb": "Read a QR code with your camera or from an image."
    },
    {
      "category": "Tracking",
      "slug": "timestamp-converter",
      "name": "Unix Timestamp Converter",
      "blurb": "Convert Unix timestamps to dates and back."
    },
    {
      "category": "Tracking",
      "slug": "time-zone-converter",
      "name": "Time Zone Converter",
      "blurb": "Convert a date and time between time zones."
    },
    {
      "category": "Tracking",
      "slug": "date-difference-calculator",
      "name": "Date Difference Calculator",
      "blurb": "Count the days, weeks and months between two dates."
    },
    {
      "category": "Tracking",
      "slug": "business-days-calculator",
      "name": "Business Days Calculator",
      "blurb": "Count working days between dates, skipping holidays you choose."
    },
    {
      "category": "Tracking",
      "slug": "time-calculator",
      "name": "Time Calculator",
      "blurb": "Add or subtract hours and minutes, handy for timesheets."
    },
    {
      "category": "SEO",
      "slug": "meta-tag-generator",
      "name": "Meta Tag Generator",
      "blurb": "Write title, description, canonical, Open Graph and Twitter tags."
    },
    {
      "category": "SEO",
      "slug": "open-graph-preview",
      "name": "Open Graph Preview",
      "blurb": "Preview a public page's title, image and Twitter card (URL is sent to the site)."
    },
    {
      "category": "SEO",
      "slug": "robots-txt-generator",
      "name": "Robots.txt Generator",
      "blurb": "Build allow and disallow rules plus a sitemap line."
    },
    {
      "category": "SEO",
      "slug": "favicon-generator",
      "name": "Favicon Generator",
      "blurb": "Make a simple letter or color favicon in PNG and ICO."
    },
    {
      "category": "SEO",
      "slug": "html-minifier",
      "name": "HTML Minifier",
      "blurb": "Strip comments and extra whitespace from HTML."
    },
    {
      "category": "SEO",
      "slug": "css-minifier",
      "name": "CSS Minifier",
      "blurb": "Shrink a stylesheet without breaking strings or url() values."
    },
    {
      "category": "SEO",
      "slug": "javascript-minifier",
      "name": "JavaScript Minifier",
      "blurb": "Shrink JavaScript in your browser without running it."
    },
    {
      "category": "SEO",
      "slug": "html-encoder",
      "name": "HTML Encoder / Decoder",
      "blurb": "Escape characters as HTML entities, or decode them."
    },
    {
      "category": "SEO",
      "slug": "markdown-to-html",
      "name": "Markdown to HTML",
      "blurb": "Turn Markdown into clean HTML source."
    },
    {
      "category": "SEO",
      "slug": "html-to-markdown",
      "name": "HTML to Markdown",
      "blurb": "Convert headings, links, lists and tables to Markdown."
    },
    {
      "category": "SEO",
      "slug": "regex-tester",
      "name": "Regex Tester",
      "blurb": "Test a JavaScript regular expression and see every match."
    },
    {
      "category": "SEO",
      "slug": "json-formatter",
      "name": "JSON Formatter",
      "blurb": "Pretty-print, minify or validate JSON."
    },
    {
      "category": "SEO",
      "slug": "json-to-csv",
      "name": "JSON to CSV",
      "blurb": "Turn an array of JSON objects into CSV."
    },
    {
      "category": "SEO",
      "slug": "csv-to-json",
      "name": "CSV to JSON",
      "blurb": "Turn CSV with a header row into JSON objects."
    },
    {
      "category": "Content",
      "slug": "word-counter",
      "name": "Word Counter",
      "blurb": "Count words, sentences and paragraphs, with reading time."
    },
    {
      "category": "Content",
      "slug": "character-counter",
      "name": "Character Counter",
      "blurb": "Count characters against limits for titles and bios."
    },
    {
      "category": "Content",
      "slug": "case-converter",
      "name": "Case Converter",
      "blurb": "Switch text between Title Case, camelCase, snake_case and more."
    },
    {
      "category": "Content",
      "slug": "text-diff",
      "name": "Text Diff Checker",
      "blurb": "Compare two versions of a text line by line or word by word."
    },
    {
      "category": "Content",
      "slug": "find-and-replace",
      "name": "Find and Replace",
      "blurb": "Replace one match or every match in pasted text."
    },
    {
      "category": "Content",
      "slug": "duplicate-line-remover",
      "name": "Duplicate Line Remover",
      "blurb": "Delete repeated lines and keep the first of each."
    },
    {
      "category": "Content",
      "slug": "whitespace-remover",
      "name": "Whitespace Remover",
      "blurb": "Trim lines, collapse spaces and clean blank lines."
    },
    {
      "category": "Content",
      "slug": "line-sorter",
      "name": "Line Sorter",
      "blurb": "Sort lines A to Z, Z to A, by number or by length."
    },
    {
      "category": "Content",
      "slug": "remove-line-breaks",
      "name": "Remove Line Breaks",
      "blurb": "Fix text copied from PDFs by removing line breaks."
    },
    {
      "category": "Content",
      "slug": "add-line-numbers",
      "name": "Add Line Numbers",
      "blurb": "Put a number in front of every line."
    },
    {
      "category": "Content",
      "slug": "text-repeater",
      "name": "Text Repeater",
      "blurb": "Repeat a word, phrase or line as many times as you need."
    },
    {
      "category": "Content",
      "slug": "lorem-ipsum-generator",
      "name": "Lorem Ipsum Generator",
      "blurb": "Generate placeholder text for mockups."
    },
    {
      "category": "Content",
      "slug": "number-to-words",
      "name": "Number to Words",
      "blurb": "Write a whole number in English words, or the reverse."
    },
    {
      "category": "Content",
      "slug": "roman-numeral-converter",
      "name": "Roman Numeral Converter",
      "blurb": "Convert numbers from 1 to 3999 to Roman numerals and back."
    },
    {
      "category": "Content",
      "slug": "morse-code",
      "name": "Morse Code Translator",
      "blurb": "Translate text to Morse code and back."
    },
    {
      "category": "AI",
      "slug": "ai-prompt-generator",
      "name": "AI Prompt Generator",
      "blurb": "Build a structured prompt from topic, goal, audience and format."
    },
    {
      "category": "AI",
      "slug": "prompt-to-image",
      "name": "Prompt to Image Generator",
      "blurb": "Write a detailed image prompt. It doesn't create images."
    },
    {
      "category": "AI",
      "slug": "prompt-to-video",
      "name": "Prompt to Video Generator",
      "blurb": "Write a one-shot video prompt. It doesn't create video."
    },
    {
      "category": "AI",
      "slug": "ai-article-compressor",
      "name": "AI Article Compressor",
      "blurb": "Shorten a long draft in the browser or with Gemini."
    },
    {
      "category": "AI",
      "slug": "ai-text-humanizer",
      "name": "AI Text Humanizer",
      "blurb": "Rewrite stock phrases so a draft reads more naturally."
    },
    {
      "category": "AI",
      "slug": "ai-article-detector",
      "name": "AI Article Detector",
      "blurb": "Pattern analysis of a draft, not proof of authorship."
    },
    {
      "category": "AI",
      "slug": "urdu-news-translator",
      "name": "Urdu News Translator",
      "blurb": "Turn Urdu news into Brief, Medium and Full English drafts."
    },
    {
      "category": "Design",
      "slug": "image-compressor",
      "name": "Image Compressor",
      "blurb": "Reduce JPG, PNG and WebP file size in your browser."
    },
    {
      "category": "Design",
      "slug": "image-resizer",
      "name": "Image Resizer",
      "blurb": "Change an image's pixel size with the ratio locked."
    },
    {
      "category": "Design",
      "slug": "image-cropper",
      "name": "Image Cropper",
      "blurb": "Crop a JPG, PNG or WebP to a free, 1:1, 4:3 or 16:9 frame."
    },
    {
      "category": "Design",
      "slug": "image-converter",
      "name": "Image Converter",
      "blurb": "Convert JPG to PNG or PNG to JPG."
    },
    {
      "category": "Design",
      "slug": "aspect-ratio-calculator",
      "name": "Aspect Ratio Calculator",
      "blurb": "Simplify a size to a ratio or find a missing side."
    },
    {
      "category": "Design",
      "slug": "color-picker",
      "name": "Color Picker",
      "blurb": "Pick a color and copy it as HEX, RGB or HSL."
    },
    {
      "category": "Design",
      "slug": "hex-to-rgb",
      "name": "Hex to RGB",
      "blurb": "Convert hex color codes to RGB, RGBA and HSL."
    },
    {
      "category": "Design",
      "slug": "image-color-analyzer",
      "name": "Image Color Analyzer",
      "blurb": "Find the dominant colors in an image, with HEX codes."
    },
    {
      "category": "Design",
      "slug": "color-contrast-checker",
      "name": "Color Contrast Checker",
      "blurb": "Test text and background colors against WCAG AA and AAA."
    },
    {
      "category": "Design",
      "slug": "css-gradient-generator",
      "name": "CSS Gradient Generator",
      "blurb": "Build linear, radial or conic gradients and copy the CSS."
    },
    {
      "category": "Design",
      "slug": "box-shadow-generator",
      "name": "Box Shadow Generator",
      "blurb": "Tune a box-shadow with a live preview and copy it."
    },
    {
      "category": "Design",
      "slug": "image-to-text",
      "name": "Image to Text",
      "blurb": "Read English text from a photo. Real photos can be misread."
    },
    {
      "category": "PDF",
      "slug": "text-to-pdf",
      "name": "Text to PDF",
      "blurb": "Turn plain text into an A4 or Letter PDF."
    },
    {
      "category": "PDF",
      "slug": "word-to-pdf",
      "name": "Word to PDF",
      "blurb": "Put the words of a .docx into a plain PDF. Images and styling are dropped."
    },
    {
      "category": "PDF",
      "slug": "image-to-pdf",
      "name": "Image to PDF",
      "blurb": "Combine JPG and PNG images into one PDF."
    },
    {
      "category": "PDF",
      "slug": "pdf-merger",
      "name": "PDF Merger",
      "blurb": "Join PDFs in the order you choose."
    },
    {
      "category": "PDF",
      "slug": "pdf-splitter",
      "name": "PDF Splitter",
      "blurb": "Copy chosen pages into a new PDF."
    },
    {
      "category": "PDF",
      "slug": "pdf-compressor",
      "name": "PDF Compressor",
      "blurb": "Try to shrink a PDF. A smaller file isn't guaranteed."
    },
    {
      "category": "PDF",
      "slug": "pdf-to-jpg",
      "name": "PDF to JPG",
      "blurb": "Turn PDF pages into JPG images."
    },
    {
      "category": "PDF",
      "slug": "pdf-to-text",
      "name": "PDF to Text",
      "blurb": "Extract selectable text from a PDF. No OCR."
    },
    {
      "category": "PDF",
      "slug": "pdf-page-counter",
      "name": "PDF Page Counter",
      "blurb": "See how many pages a PDF has."
    },
    {
      "category": "PDF",
      "slug": "pdf-metadata",
      "name": "PDF Metadata Viewer / Remover",
      "blurb": "View a PDF's author and dates, or download a cleared copy."
    },
    {
      "category": "Calculators",
      "slug": "percentage-calculator",
      "name": "Percentage Calculator",
      "blurb": "Find X% of a number or what percent one number is of another."
    },
    {
      "category": "Calculators",
      "slug": "percentage-change-calculator",
      "name": "Percentage Change Calculator",
      "blurb": "See the percent rise or drop between two numbers."
    },
    {
      "category": "Calculators",
      "slug": "discount-calculator",
      "name": "Discount Calculator",
      "blurb": "See the amount saved and the price you pay."
    },
    {
      "category": "Calculators",
      "slug": "sales-tax-calculator",
      "name": "Sales Tax Calculator",
      "blurb": "Add a sales tax rate to a price."
    },
    {
      "category": "Calculators",
      "slug": "average-calculator",
      "name": "Average Calculator",
      "blurb": "Find the mean, median and mode of a list."
    },
    {
      "category": "Calculators",
      "slug": "hourly-wage-calculator",
      "name": "Hourly Wage Calculator",
      "blurb": "Turn an hourly rate into weekly, monthly and annual pay."
    },
    {
      "category": "Calculators",
      "slug": "paycheck-estimator",
      "name": "Paycheck Estimator",
      "blurb": "Estimate take-home pay from the deductions you enter."
    },
    {
      "category": "Calculators",
      "slug": "compound-interest-calculator",
      "name": "Compound Interest Calculator",
      "blurb": "See how savings grow with compounding."
    },
    {
      "category": "Calculators",
      "slug": "savings-goal-calculator",
      "name": "Savings Goal Calculator",
      "blurb": "Estimate the regular amount that reaches a target."
    },
    {
      "category": "Calculators",
      "slug": "loan-calculator",
      "name": "Loan Calculator",
      "blurb": "Estimate payments and payoff for a fixed-rate loan."
    },
    {
      "category": "Calculators",
      "slug": "mortgage-calculator",
      "name": "Mortgage Calculator",
      "blurb": "Estimate principal, interest and extra-payment payoff."
    },
    {
      "category": "Calculators",
      "slug": "auto-loan-calculator",
      "name": "Auto Loan Calculator",
      "blurb": "Estimate a monthly car payment and total interest."
    },
    {
      "category": "Calculators",
      "slug": "home-affordability-calculator",
      "name": "Home Affordability Calculator",
      "blurb": "A budget estimate for a home price, not an approval."
    },
    {
      "category": "Calculators",
      "slug": "debt-payoff-calculator",
      "name": "Debt Payoff Calculator",
      "blurb": "Compare payoff plans for several debts."
    },
    {
      "category": "Calculators",
      "slug": "credit-card-payoff-calculator",
      "name": "Credit Card Payoff Calculator",
      "blurb": "See months to pay off a balance and the interest."
    },
    {
      "category": "Calculators",
      "slug": "rent-vs-buy-calculator",
      "name": "Rent vs Buy Calculator",
      "blurb": "Compare the estimated cost of renting and buying."
    },
    {
      "category": "Calculators",
      "slug": "tip-calculator",
      "name": "Tip Calculator",
      "blurb": "Work out a tip and split the bill."
    },
    {
      "category": "Calculators",
      "slug": "fuel-cost-calculator",
      "name": "Fuel Cost Calculator",
      "blurb": "Estimate the fuel cost of a trip."
    },
    {
      "category": "Calculators",
      "slug": "square-footage-calculator",
      "name": "Square Footage Calculator",
      "blurb": "Add up room sizes in square feet and meters."
    },
    {
      "category": "Calculators",
      "slug": "gpa-calculator",
      "name": "GPA Calculator",
      "blurb": "Calculate a credit-weighted GPA on a 4.0 scale."
    },
    {
      "category": "Calculators",
      "slug": "age-calculator",
      "name": "Age Calculator",
      "blurb": "Count years, months and days from a birth date."
    },
    {
      "category": "Calculators",
      "slug": "unit-converter",
      "name": "Unit Converter",
      "blurb": "Convert length, weight and temperature."
    },
    {
      "category": "Calculators",
      "slug": "random-number-generator",
      "name": "Random Number Generator",
      "blurb": "Draw random numbers, with no-repeat draws."
    },
    {
      "category": "Security",
      "slug": "password-generator",
      "name": "Password Generator",
      "blurb": "Create random passwords from 8 to 64 characters."
    },
    {
      "category": "Security",
      "slug": "password-strength-checker",
      "name": "Password Strength Checker",
      "blurb": "Estimate a password's strength without a breach check."
    },
    {
      "category": "Security",
      "slug": "hash-generator",
      "name": "Hash Generator",
      "blurb": "Make SHA-256, SHA-384 or SHA-512 hashes. Not encryption."
    },
    {
      "category": "Security",
      "slug": "base64-encoder",
      "name": "Base64 Encoder",
      "blurb": "Encode text to Base64 or decode it. Not security."
    },
    {
      "category": "Security",
      "slug": "jwt-decoder",
      "name": "JWT Decoder",
      "blurb": "Read a token's header and payload. The signature isn't verified."
    },
    {
      "category": "Security",
      "slug": "uuid-generator",
      "name": "UUID Generator",
      "blurb": "Create random UUID v4 values."
    },
    {
      "category": "Security",
      "slug": "cron-expression-generator",
      "name": "Cron Expression Generator",
      "blurb": "Build a cron schedule or read one in plain English."
    },
    {
      "category": "Security",
      "slug": "gitignore-generator",
      "name": ".gitignore Generator",
      "blurb": "Build a .gitignore file from ready-made templates."
    },
    {
      "category": "Security",
      "slug": "cps-test",
      "name": "CPS Test",
      "blurb": "Measure your clicks per second."
    }
  ]
} as const;
