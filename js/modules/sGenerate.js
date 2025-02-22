const words = [
    "apple", "banana", "chair", "dog", "fast", "green", "house", "jump",
    "light", "mountain", "night", "orange", "pencil", "quick", "river", "sun", "tree",
    "window", "general", "yellow", "ocean", "happy", "cloud", "music", "dance",
    "more", "work", "she", "he", "than", "number", "order", "very", "during", "play", "into", "open",
    "there", "very", "also", "home", "person", "need", "such", "before", "how", "group", "call", "well",
    "cat", "dog", "fish", "bird", "car", "bus", "train", "plane", "boat", "bike", "run", "walk", "jump",
    "sit", "stand", "read", "write", "draw", "paint", "sing", "dance", "laugh", "cry", "smile", "frown",
    "happy", "sad", "angry", "excited", "bored", "tired", "sleepy", "awake", "hungry", "thirsty", "full",
    "empty", "big", "small", "tall", "short", "long", "wide", "narrow", "hot", "cold", "warm", "cool",
    "fast", "slow", "quick", "early", "late", "new", "old", "young", "old", "good", "bad", "right", "wrong",
    "left", "right", "up", "down", "in", "out", "on", "off", "over", "under", "near", "far", "here", "there",
    "this", "that", "these", "those", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
    "ten", "first", "second", "third", "fourth", "fifth", "sixth", "seventh", "eighth", "ninth", "tenth",
    "red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white", "gray", "gold",
    "silver", "day", "night", "morning", "afternoon", "evening", "week", "month", "year", "today", "tomorrow",
    "yesterday", "now", "later", "soon", "always", "never", "sometimes", "often", "usually", "rarely", "once",
    "twice", "again", "before", "after", "during", "while", "until", "since", "because", "if", "then", "else",
    "although", "though", "even", "when", "where", "why", "how", "who", "what", "which", "whose", "whom"
];

export default function generateSentence() {
    let sentence = [];
    let length = 14;
    for (let i = 0; i < length; i++) {
        let word = words[Math.floor(Math.random() * words.length)];
        sentence.push(word);
    }
    return sentence.join(" ");
}