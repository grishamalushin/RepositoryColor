function getColor(id)
    {
        var color = [
            "green_shadow",
            "orange_shadow",
            "blue_shadow",
            "yellow_shadow",
            "violet_shadow",
            "brown_shadow"
        ];
        lastColor = arrColor[id] = color[countColor];
        countColor++;
        if (color.length < countColor) countColor = 0;
        return arrColor[id];
    }
