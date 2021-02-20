DROP TABLE IF EXISTS "gallery";

CREATE TABLE "gallery" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR(1024),
	"description" VARCHAR(1024),
	"likes" INTEGER
);

INSERT INTO "gallery"
("path", "description", "likes")
VALUES 
('images/sardinia.jpg', 'Photo of a trekking/camping trip I did with my weird friends in Sardinia :)', 0),
('images/graduation.jpg', 'Photo of my college roommates and me at graduation - still friends!', 0),
('images/GRLPWR.jpg', 'Picture of my sister-in-law and myself when we finished biking across the US!', 0),
('images/moons.jpg', 'Photo of my two best friends and me getting matching tattoos- classic!', 0),
('images/puglia.jpg', 'Photograph of a party I organized for 450 people at an Italian castle.', 0),
('images/rybrittmac.jpg', 'Photo of my two older brothers and me when we were kids.', 0),
('images/salsa.PNG', 'Snapshot of me dancing my heart out in Cuba.', 0),
('images/YSB.jpg', 'Photo of my college softball teammates as our team captain married my brother!', 0);