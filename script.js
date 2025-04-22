function handleResume() {
    const choice = confirm("Do you want to view the resume or download it?\n\nClick OK to VIEW, Cancel to DOWNLOAD.");
    const rawURL = "https://github.com/alokg-812/PersonalDetails/raw/main/Resumes/Resume%20(2).pdf";
    const viewerURL = `https://docs.google.com/viewer?url=${encodeURIComponent(rawURL)}`;
  
    if (choice) {
      // View in browser via Google Docs viewer
      window.open(viewerURL, "_blank");
    } else {
      // Force download
      const a = document.createElement('a');
      a.href = rawURL;
      a.download = "Alok_Resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }
