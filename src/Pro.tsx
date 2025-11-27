import React, { useState } from 'react'
import * as Tooltip from '@radix-ui/react-tooltip'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import profileImg from './assets/mac-profile.jpg'
import dpuCampus from './assets/dpu-campus.jpg'
import dpuLogo from './assets/dpu-logo.png'

type Page = 'profile' | 'university' | 'timeline'

const studyTimeline = [
  {
    yearLabel: 'ปี 1 (2565)',
    focus: 'พื้นฐานวิศวกรรมคอมพิวเตอร์และทักษะการเรียนระดับมหาวิทยาลัย',
    semesters: [
      {
        term: 'ภาคเรียนที่ 1/2565',
        courses: [
          'CE101 ทักษะเบื้องต้นสำหรับวิศวกรรมคอมพิวเตอร์',
          'CE201 หลักการเขียนโปรแกรมคอมพิวเตอร์',
          'GE170 สังคมและเศรษฐกิจดิจิทัลยุคอุตสาหกรรม 4.0',
          'GE171 การคิดเชิงสร้างสรรค์และนวัตกรรม',
          'MA208 คณิตศาสตร์พื้นฐาน',
          'PE108 การเขียนแบบวิศวกรรม',
        ],
      },
      {
        term: 'ภาคเรียนที่ 2/2565',
        courses: [
          'CE216 หลักการเขียนโปรแกรมเชิงวัตถุ',
          'CE229 วงจรดิจิทัลสำหรับวิศวกรรมคอมพิวเตอร์',
          'LA130 ภาษาอังกฤษพื้นฐาน',
          'MA209 คณิตศาสตร์วิศวกรรม 1',
          'PH207 ฟิสิกส์พื้นฐาน',
          'CT101 โลกของปัญญาประดิษฐ์และ IoTs',
        ],
      },
    ],
  },
  {
    yearLabel: 'ปี 2 (2566)',
    focus: 'ต่อยอดคณิตศาสตร์ วิศวกรรมซอฟต์แวร์ และโครงสร้างคอมพิวเตอร์',
    semesters: [
      {
        term: 'ภาคเรียนที่ 1/2566',
        courses: [
          'LA131 ภาษาอังกฤษเพื่อการสื่อสาร 1',
          'CE214 คณิตศาสตร์ไม่ต่อเนื่อง',
          'PE107 ความน่าจะเป็นและสถิติวิศวกรรม',
          'CE327 โครงสร้างและสถานีย์คอมพิวเตอร์',
          'CE341 วิศวกรรมซอฟต์แวร์',
          'วิชาเลือกเสรี 1 วิชา',
        ],
      },
      {
        term: 'ภาคเรียนที่ 2/2566',
        courses: [
          'CE215 การวิเคราะห์ข้อมูลเชิงเดนตี้',
          'CE227 การออกแบบและวิเคราะห์อัลกอริทึม',
          'CE228 ปฏิบัติการระบบไฟฟ้าและอิเล็กทรอนิกส์สำหรับวิศวกรรมคอมพิวเตอร์',
          'CE290 หัวข้อพิเศษทางวิศวกรรมคอมพิวเตอร์เบื้องต้น',
          'CE384 การโปรแกรมระบบปฏิบัติการ',
          'LA132 ภาษาอังกฤษเพื่อการสื่อสาร 2',
          'GE172 เศรษฐกิจการเมืองและวัฒนธรรมในภูมิภาคกลุ่ม AEC และจีน',
        ],
      },
    ],
  },
  {
    yearLabel: 'ปี 3 (2567)',
    focus: 'ลงลึกด้านการพัฒนาเว็บ ระบบเครือข่าย และโปรเจกต์ใหญ่',
    semesters: [
      {
        term: 'ภาคเรียนที่ 1/2567',
        courses: [
          'CE306 การโปรแกรมประยุกต์บนเว็บ',
          'CE334 การโปรแกรมระบบและระบบปฏิบัติการ',
          'CE370 เครือข่ายคอมพิวเตอร์',
          'CE385 การออกแบบสถาปัตยกรรมแอปพลิเคชัน',
          'CE396 การออกแบบระบบฐานข้อมูล',
        ],
      },
      {
        term: 'ภาคเรียนที่ 2/2567',
        courses: [
          'BA103 ผู้ประกอบการดิจิทัล',
          'CE308 โปรแกรมประยุกต์กับอุปกรณ์เคลื่อนที่',
          'CE378 ความมั่นคงในระบบสารสนเทศ',
          'CE379 เครือข่ายอินเทอร์เน็ตของอุปกรณ์อัจฉริยะ',
          'CE395 ปฏิบัติการทางวิศวกรรมคอมพิวเตอร์',
          'CE397 โครงงานวิศวกรรมคอมพิวเตอร์ 1',
          'CE398 โครงงานวิศวกรรมคอมพิวเตอร์ 2',
        ],
      },
      {
        term: 'ภาคเรียนที่ 3/2567',
        courses: ['CE402 การฝึกงานทางวิศวกรรมคอมพิวเตอร์'],
      },
    ],
  },
  {
    yearLabel: 'ปี 4 (2568)',
    focus: 'เตรียมตัวสู่สายงานจริงและหัวข้อขั้นสูงของวิศวกรรมคอมพิวเตอร์',
    semesters: [
      {
        term: 'ภาคเรียนที่ 1/2568',
        courses: [
          'CE344 วิศวกรรมหุ่นยนต์',
          'CE498 โครงงานวิศวกรรมคอมพิวเตอร์ 1',
          'LW391 กฏหมายและจรรยาบรรณทางวิชาชีพเทคโนโลยีสารสนเทศ',
          'วิชาเลือกเสรี 1 วิชา',
        ],
      },
      {
        term: 'ภาคเรียนที่ 2/2568',
        courses: [
          'CE360 หัวข้อพิเศษทางวิศวกรรมเครือข่ายสารสนเทศ',
          'CE499 โครงงานวิศวกรรมคอมพิวเตอร์ 2',
          'CE410 สหกิจศึกษา ด้านวิศวกรรมคอมพิวเตอร์',
        ],
      },
    ],
  },
]

export const Pro: React.FC = () => {
  const [page, setPage] = useState<Page>('profile')

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/70 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-[#0F3FBF] text-white font-semibold shadow-sm">
              M
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Rachata Sintutanarut
              </p>
              <p className="text-xs text-slate-500">
                Computer Engineering Student
              </p>
            </div>
          </div>

          {/* NAV เปลี่ยนหน้า */}
          <nav className="hidden gap-4 text-sm font-medium text-slate-600 md:flex">
            {[
              { key: 'profile', label: 'Profile' },
              { key: 'university', label: 'University' },
              { key: 'timeline', label: 'Timeline' },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => setPage(item.key as Page)}
                className={`border-b-2 pb-1 transition ${
                  page === item.key
                    ? 'border-[#0F3FBF] text-[#0F3FBF]'
                    : 'border-transparent hover:border-slate-200 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-10 space-y-12">
        {page === 'profile' && <ProfilePage />}
        {page === 'university' && <UniversityPage />}
        {page === 'timeline' && <TimelinePage />}

        {/* CONTACT แสดงทุกหน้า */}
        <ContactSection />
        <footer className="border-t border-slate-100 pt-6 text-xs text-slate-500">
          © {new Date().getFullYear()} Rachata Sintutanarut · Portfolio
        </footer>
      </main>
    </div>
  )
}

/* ---------- PAGE: PROFILE ---------- */

const ProfilePage: React.FC = () => {
  return (
    <>
      {/* HERO + PROFILE */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-medium text-slate-600 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Open to UX/UI &amp; Database opportunities
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0F3FBF]">
            Portfolio · CE Student
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            Rachata Sintutanarut
          </h1>
          <p className="text-sm text-slate-600 md:text-base">
            นักศึกษาคณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์ สนใจงานด้าน{' '}
            <span className="font-semibold">UX / UI</span>,{' '}
            <span className="font-semibold">Full-Stack Developer</span> และ{' '}
            <span className="font-semibold">Database</span>. ชอบออกแบบระบบให้ใช้งานง่าย
            ดูโมเดิร์น และเป็นมืออาชีพ
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-xl bg-[#0F3FBF] px-5 py-2 text-sm font-medium text-white shadow-md shadow-[#0F3FBF]/30 transition hover:-translate-y-0.5 hover:bg-[#0b2f8a]"
            >
              ติดต่อ / โซเชียล
            </a>
            <button
              type="button"
              className="rounded-xl border border-slate-200 bg-white px-5 py-2 text-sm font-medium text-slate-800 shadow-sm"
            >
              ดูทักษะที่ถนัด
            </button>
          </div>

          <div className="flex flex-wrap gap-2 text-[11px] text-slate-600">
            <span className="rounded-full bg-slate-100 px-3 py-1">
              Figma · Wireframe · Prototype
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              React + TypeScript
            </span>
            <span className="rounded-full bg-slate-100 px-3 py-1">
              SQL · ER Diagram
            </span>
          </div>
        </div>

        {/* การ์ดโปรไฟล์ */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-64 max-w-xs">
            <div className="absolute inset-0 -translate-x-3 translate-y-3 rounded-3xl bg-gradient-to-tr from-[#0F3FBF]/10 to-sky-300/20 blur-md" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white/90 p-4 shadow-xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src={profileImg}
                  alt="Rachata profile"
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-3 pt-8 text-xs text-white">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-slate-100/80">
                    Now
                  </p>
                  <p className="text-sm font-semibold">
                    Mac · Rachata Sintutanarut
                  </p>
                  <p className="text-[11px] text-slate-100/80">
                    UX/UI · Full-Stack · Database
                  </p>
                </div>
              </div>

              <div className="mt-3 space-y-1 text-xs text-slate-600">
                <div className="flex justify-between">
                  <span>ชื่อเล่น</span>
                  <span className="font-medium text-slate-900">แม็ค</span>
                </div>
                <div className="flex justify-between">
                  <span>วันเกิด</span>
                  <span className="font-medium text-slate-900">3 ม.ค. 2547</span>
                </div>
                <div className="flex justify-between">
                  <span>คณะ</span>
                  <span className="font-medium text-slate-900">วิศวกรรมศาสตร์</span>
                </div>
                <div className="flex justify-between">
                  <span>สาขา</span>
                  <span className="font-medium text-slate-900">
                    วิศวกรรมคอมพิวเตอร์
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">ทักษะที่ถนัด</h2>
        <p className="text-sm text-slate-600">
          โฟกัสหลักตอนนี้คือ UX/UI, Full-Stack Web และ Database
          เพื่อให้สามารถออกแบบทั้งหน้าบ้าน–หลังบ้านได้ครบ
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: 'UX / UI',
              desc: 'ออกแบบหน้าจอให้ใช้งานง่าย โฟกัสโฟลว์ผู้ใช้ และประสบการณ์การใช้งานที่ลื่นไหล',
              tags: ['Wireframe', 'Prototype', 'User Flow'],
            },
            {
              title: 'Full-Stack Developer',
              desc: 'พัฒนาเว็บทั้งฝั่ง Frontend/Backend และเชื่อมต่อ API ให้ระบบทำงานครบวงจร',
              tags: ['React + TypeScript', 'REST API', 'Authentication'],
            },
            {
              title: 'Database',
              desc: 'ออกแบบโครงสร้างฐานข้อมูลให้รองรับการขยายตัว และจัดการข้อมูลให้เป็นระเบียบ',
              tags: ['SQL', 'ER Diagram', 'Normalization'],
            },
          ].map((card) => (
            <div
              key={card.title}
              className="group rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm transition hover:-translate-y-1 hover:border-[#0F3FBF]/50 hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-slate-900">{card.title}</p>
              <p className="mt-1 text-xs text-slate-600">{card.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                {card.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-slate-50 px-3 py-1 text-slate-700 shadow-sm transition group-hover:bg-[#0F3FBF]/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GOAL */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900">
          เส้นทางที่อยากลองทำงาน
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">เป้าหมายสายออกแบบ</p>
            <p className="mt-1 text-xs text-slate-600">
              อยากลองทำงานจริงในสาย{' '}
              <span className="font-semibold">UX / UI Designer</span>
              เพื่อออกแบบประสบการณ์ผู้ใช้ให้เข้าใจง่าย
              และต่อยอดดีไซน์ให้เป็นระบบที่ใช้งานได้จริง
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              เป้าหมายสาย Database
            </p>
            <p className="mt-1 text-xs text-slate-600">
              อีกทางเลือกคือสาย{' '}
              <span className="font-semibold">Database Engineer</span>
              ที่ดูแลโครงสร้างข้อมูล เบื้องหลังระบบต่าง ๆ ให้เสถียรและจัดการง่าย
              รองรับผู้ใช้จำนวนมากได้
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------- PAGE: UNIVERSITY ---------- */

const UniversityPage: React.FC = () => {
  return (
    <>
      <section className="space-y-5">
        <div className="flex flex-wrap items-center gap-3">
          <img
            src={dpuLogo}
            alt="Dhurakij Pundit University logo"
            className="h-10 w-auto"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6b34ff]">
              Dhurakij Pundit University
            </p>
            <p className="text-sm font-semibold text-slate-900">
              มหาวิทยาลัยธุรกิจบัณฑิตย์ · คณะวิศวกรรมศาสตร์
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center">
          <div className="space-y-3 text-sm text-slate-700">
            <p>
              ผมกำลังศึกษาอยู่ที่{' '}
              <span className="font-semibold">
                มหาวิทยาลัยธุรกิจบัณฑิตย์ (DPU)
              </span>{' '}
              ซึ่งเป็นมหาวิทยาลัยเอกชนที่เน้นการเรียนแบบบูรณาการ ให้ลงมือทำจริง
              ผ่านโปรเจกต์และงานร่วมกับภาคธุรกิจ
            </p>
            <p>
              ใน{' '}
              <span className="font-semibold">
                คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมคอมพิวเตอร์
              </span>{' '}
              ได้เรียนทั้งพื้นฐานวิศวกรรม ซอฟต์แวร์ ระบบเครือข่าย
              การพัฒนาเว็บและฐานข้อมูล ซึ่งช่วยต่อยอดไปสู่สายงานที่สนใจอย่าง
              UX/UI และ Database
            </p>
            <p>
              บรรยากาศในมหาวิทยาลัยค่อนข้างเป็นกันเอง มีพื้นที่สีเขียวรอบ ๆ
              แคมปัสเหมือนในรูป ทำให้เหมาะกับทั้งการเรียนและใช้ชีวิตของนักศึกษา
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl bg-[#6b34ff]/15 blur-md" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-lg">
              <img
                src={dpuCampus}
                alt="DPU Campus"
                className="h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3 text-xs text-slate-700">
          <div className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">สิ่งที่เน้นเรียน</p>
            <p className="mt-1">
              พื้นฐานวิศวกรรมคอมพิวเตอร์ การเขียนโปรแกรม ระบบเครือข่าย
              ฐานข้อมูล และการพัฒนาเว็บแอปพลิเคชัน
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              วิธีการเรียนการสอน
            </p>
            <p className="mt-1">
              เน้นลงมือทำโปรเจกต์จริง ทำงานเป็นทีม และเชื่อมกับโจทย์จากภาคธุรกิจ
              เพื่อเตรียมตัวเข้าสู่สายงานจริง
            </p>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm">
            <p className="text-sm font-semibold text-slate-900">
              สิ่งที่ผมชอบเกี่ยวกับ DPU
            </p>
            <p className="mt-1">
              ได้ใช้ทั้งความคิดเชิงออกแบบและเชิงวิศวกรรมไปพร้อมกัน
              โดยเฉพาะในโปรเจกต์ใหญ่ของคณะ ที่เปิดโอกาสให้ลองทำของจริง
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

/* ---------- PAGE: TIMELINE ---------- */

const TimelinePage: React.FC = () => {
  return (
    <section className="space-y-5">
      <h2 className="text-lg font-semibold text-slate-900">
        Timeline การเรียนวิศวกรรมคอมพิวเตอร์
      </h2>
      <p className="text-sm text-slate-600">
        ภาพรวมวิชาที่เรียนตลอด 4 ปี แบ่งตามชั้นปีและภาคเรียน
        เพื่อให้เห็นว่าแต่ละช่วงโฟกัสเรื่องอะไรบ้าง
      </p>

      <div className="relative mt-4">
        <div className="absolute left-4 top-0 bottom-0 hidden w-px bg-slate-200 md:block" />
        <div className="space-y-8">
          {studyTimeline.map((year) => (
            <div key={year.yearLabel} className="relative pl-0 md:pl-10">
              <div className="absolute -left-1 top-1 hidden h-3 w-3 rounded-full border-2 border-white bg-[#0F3FBF] shadow md:block" />
              <div className="rounded-2xl border border-slate-100 bg-white/90 p-4 shadow-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-slate-900">
                    {year.yearLabel}
                  </p>
                  <p className="text-xs text-slate-500">{year.focus}</p>
                </div>
                <div className="mt-3 grid gap-4 md:grid-cols-2">
                  {year.semesters.map((sem) => (
                    <div
                      key={sem.term}
                      className="rounded-xl border border-slate-100 bg-slate-50/60 p-3 text-xs text-slate-700"
                    >
                      <p className="text-[11px] font-semibold uppercase tracking-wide text-[#0F3FBF]">
                        {sem.term}
                      </p>
                      <ul className="mt-2 list-disc space-y-1 pl-4">
                        {sem.courses.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------- CONTACT (ใช้ทุกหน้า) ---------- */

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="space-y-3">
      <h2 className="text-lg font-semibold text-slate-900">ติดต่อ &amp; Social</h2>
      <p className="text-sm text-slate-600">
        ถ้าสนใจคุยเรื่องงานออกแบบ ระบบเว็บ หรือฐานข้อมูล
        สามารถทักมาคุยเล่นหรือคุยจริงจังได้เลย :)
      </p>

      <Tooltip.Provider delayDuration={150}>
        <div className="flex items-center gap-4">
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0F3FBF] text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#0b2f8a]"
              >
                <FaFacebook className="text-xl" />
              </a>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="top"
                className="rounded-md bg-slate-900 px-2 py-1 text-xs text-white shadow"
              >
                Facebook ของแม็ค
                <Tooltip.Arrow className="fill-slate-900" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>

          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-[#0F3FBF] to-sky-400 text-white shadow-md transition hover:-translate-y-0.5 hover:from-[#0b2f8a] hover:to-sky-500"
              >
                <FaInstagram className="text-xl" />
              </a>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                side="top"
                className="rounded-md bg-slate-900 px-2 py-1 text-xs text-white shadow"
              >
                Instagram ของแม็ค
                <Tooltip.Arrow className="fill-slate-900" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </div>
      </Tooltip.Provider>
    </section>
  )
}
