/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import translate from 'translate';
import './TranslatorPage.css';

function Translator() {
  const [sourceLang, setSourceLang] = useState('fa');
  const [targetLang, setTargetLang] = useState('en');
  const [sourceText, setSourceText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  const handleSourceLangChange = (e) => {
    setSourceLang(e.target.value);
  };

  const handleTargetLangChange = (e) => {
    setTargetLang(e.target.value);
  };

  const handleSourceTextChange = (e) => {
    setSourceText(e.target.value);
  };

  const handleTranslate = async () => {
    try {
      const translated = await translate(sourceText, {
        from: sourceLang,
        to: targetLang,
      });
      setTranslatedText(translated);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="translator-container">
      <div className="language-selectors">
        <select value={sourceLang} onChange={handleSourceLangChange}>
          <option value="fa">Farsi (Persian)</option>
          <option value="en">English</option>
          <option value="ar">arabic</option>
        </select>

        <select value={targetLang} onChange={handleTargetLangChange}>
          <option value="en">English</option>
          <option value="fa">Farsi (Persian)</option>
          <option value="ar">arabic</option>
        </select>
      </div>

      <div className="translation-form">
        <textarea
          placeholder="Enter text to translate"
          value={sourceText}
          onChange={handleSourceTextChange}
        />

        <button onClick={handleTranslate}>Translate</button>
      </div>

      {translatedText && (
        <div className="translated-text">
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
}

export default Translator;
