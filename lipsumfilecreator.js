
var jsonfile = require('jsonfile')
 
var file = 'data.json'
var obj = [
    {
        person: "Oneill",
        quote: "Well, they could be blowing their noses right now."
    },
    {
        person: "Oneill",
        quote: "Perfect. If any little rocks sneak up on us, we'll have plenty of warning."
    },
     {
        person: "Oneill",
        quote: "Sex, drugs, and rock n' roll?"
    },
        {
        person: "Oneill",
        quote: "Well, it might be a black hole."
    },
        {
        person: "Oneill",
        quote: "Good morning, campers! Sleep well? I did."
    },
        {
        person: "Oneill",
        quote: "General, request permission to beat the crap out of this man."
    },
        {
        person: "Oneill",
        quote: "Are these documents sensitive enough to warrant a three-man team with a Jaffa escort, sir?"
    },
            {
        person: "Jackson",
        quote: "You just said there's nothing 'cruvus' with you."
    },
            {
        person: "Jackson",
        quote: "Ysee?! See? See? See? See?? See?? Mythology is one of the primary motivations for cultural development!"
    },
            {
        person: "Jackson",
        quote: "He just asked if we were Soviet spies… oh."
    },
];
 
jsonfile.writeFile(file, obj, function (err) {
  console.error(err)
})



