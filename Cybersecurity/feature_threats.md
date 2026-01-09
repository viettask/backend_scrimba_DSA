# Feature Threat Modelling 🎶

     /\_/\
    ( o.o )
     > ^ <   let's think like a developer

Below are two key features from a music school portal — one for a student and one for a teacher.

For each feature, think through the six STRIDE categories and note what could go wrong.

---

## Feature 1: Student – Upload Practice Recording 🎤

A student logs in and uploads their weekly practice video for their teacher to review.

Possible STRIDE threats:
1. Spoofing – Someone logs in as another student and uploads fake files.
2. Tampering – A student alters or overwrites another user’s recording.
3. Repudiation – A student deletes their upload and denies ever doing it.
4. Information Disclosure – Uploaded videos or names are visible to others.
5. Denial of Service – Students spam giant video files and slow the system.
6. Elevation of Privilege – A student accesses the teacher area

---

## Feature 2: Teacher – Provide Lesson Feedback 🎹

A teacher reviews student submissions and leaves comments or grades.

Possible STRIDE threats:
1. Spoofing – A student fakes a teacher identity to post fake feedback on their own work.
2. Tampering – A student alters or replaces feedback data in transit.
3. Repudiation – A teacher edits or deletes feedback and later denies doing so.
4. Information Disclosure – Private videos or teacher comments are visible to unauthorized users.
5. Denial of Service – Excessive or repeated uploads crash or slow the feedback system.
6. Elevation of Privilege – A teacher accesses admin-only tools or other teachers’ feedback areas.