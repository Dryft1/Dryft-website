# Dryft Shopify Theme

If you just want to download the theme as a ZIP without using the terminal:

1. Open the repository in your browser (e.g., on GitHub).
2. Click the green **Code** button.
3. Choose **Download ZIP**.
4. Upload that ZIP to Shopify: Online Store → Themes → **Add theme** → **Upload ZIP file**.

If you are already in a terminal and want to make the ZIP yourself:

```bash
zip -r dryft-theme.zip . -x "*.git*"
```

That command creates `dryft-theme.zip` in this folder, which you can upload to Shopify using the same **Add theme → Upload ZIP file** flow.
