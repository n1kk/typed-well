import sharp from "sharp";

sharp("docs/snippet1.png").webp().toFile("docs/snippet1.webp");
