import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Linking, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

const colors = {
  blue: '#34556D',
  peach: '#DF9385',
  orange: '#E89533',
  green: '#2B4431',
  cream: '#FCF5E3',
  black: '#272727',
  muted: '#6E7271',
};

const tabs = [
  ['home', 'Home'],
  ['events', 'Events'],
  ['hackathon', 'Hackathon'],
  ['resources', 'Resources'],
  ['about', 'About'],
];

function Eyebrow({ children }) {
  return <Text style={styles.eyebrow}>{children}</Text>;
}

function Button({ children, onPress, light = false }) {
  return <Pressable onPress={onPress} style={[styles.button, light && styles.lightButton]}><Text style={[styles.buttonText, light && styles.lightButtonText]}>{children}</Text><Text style={[styles.buttonArrow, light && styles.lightButtonText]}>→</Text></Pressable>;
}

function Home({ go }) {
  return <ScrollView contentContainerStyle={styles.content}>
    <View style={styles.hero}><Eyebrow>PURDUE'S COMMUNITY FOR BOLD BUILDERS</Eyebrow><Text style={styles.heroTitle}>Make your next idea <Text style={styles.peachText}>matter.</Text></Text><Text style={styles.heroCopy}>A welcoming space for women and allies to learn, connect, and create the future together.</Text><Button light onPress={() => go('about')}>Join InnovateHer</Button><Text style={styles.heroMark}>✦</Text></View>
    <View style={styles.sectionHeader}><View><Eyebrow>MARK YOUR CALENDAR</Eyebrow><Text style={styles.sectionTitle}>What's next</Text></View><Pressable onPress={() => go('events')}><Text style={styles.link}>See all →</Text></Pressable></View>
    <Pressable style={styles.featured} onPress={() => go('hackathon')}><DateTile day="28" month="SEP" /><View style={styles.cardCopy}><Text style={styles.tag}>FEATURED EVENT</Text><Text style={styles.cardTitle}>InnovateHer Hackathon</Text><Text style={styles.mutedText}>Hillenbrand Hall · 9:00 AM</Text></View><Text style={styles.circleArrow}>→</Text></Pressable>
    <View style={styles.announcement}><Text style={styles.alert}>!</Text><View><Eyebrow>ANNOUNCEMENT</Eyebrow><Text style={styles.announcementText}>Applications for our fall cohort are now open.</Text></View></View>
  </ScrollView>;
}

function DateTile({ day, month, color = colors.cream }) {
  return <View style={[styles.dateTile, { backgroundColor: color }]}><Text style={styles.dateDay}>{day}</Text><Text style={styles.dateMonth}>{month}</Text></View>;
}

function Events({ go }) {
  const events = [['28', 'SEP', 'Hackathon', 'InnovateHer Hackathon', 'Sep 28 · 9:00 AM · Hillenbrand Hall', colors.peach], ['06', 'OCT', 'Workshop', 'Build Your Personal Brand', 'Oct 6 · 6:00 PM · WALC 3121', '#C8D9C9'], ['19', 'OCT', 'Community', 'InnovateHer Coffee Chat', 'Oct 19 · 5:30 PM · The CCO', '#F0D49D']];
  return <ScrollView contentContainerStyle={styles.content}><Eyebrow>FIND YOUR PEOPLE</Eyebrow><Text style={styles.pageTitle}>Events</Text><Text style={styles.pageIntro}>From first hello to final demo, there is always a place for you here.</Text><View style={styles.pills}><Text style={styles.activePill}>Upcoming</Text><Text style={styles.pill}>Past events</Text></View>{events.map(([day, month, type, title, detail, color]) => <Pressable key={title} style={styles.eventCard} onPress={() => type === 'Hackathon' && go('hackathon')}><DateTile day={day} month={month} color={color} /><View style={styles.cardCopy}><Text style={styles.tag}>{type}</Text><Text style={styles.cardTitle}>{title}</Text><Text style={styles.mutedText}>{detail}</Text></View><Text style={styles.chevron}>›</Text></Pressable>)}</ScrollView>;
}

function Hackathon({ go }) {
  return <ScrollView contentContainerStyle={styles.content}><Pressable onPress={() => go('events')}><Text style={styles.link}>← Back to events</Text></Pressable><View style={styles.hackHeader}><Text style={styles.tag}>SEPTEMBER 28, 2026</Text><Text style={styles.pageTitle}>Build something <Text style={styles.peachText}>brilliant.</Text></Text><Text style={styles.pageIntro}>One day. Big ideas. A room full of people ready to help you bring them to life.</Text></View><Button onPress={() => Linking.openURL('https://forms.google.com')}>Register for the hackathon</Button><View style={styles.detailRow}><View><Eyebrow>WHERE</Eyebrow><Text style={styles.detailStrong}>Hillenbrand Hall</Text><Text style={styles.mutedText}>East Lafayette, IN</Text></View><View><Eyebrow>WHEN</Eyebrow><Text style={styles.detailStrong}>9:00 AM – 9:00 PM</Text><Text style={styles.mutedText}>Sunday, September 28</Text></View></View><View style={styles.textBlock}><Eyebrow>THE DAY AT A GLANCE</Eyebrow><Text style={styles.sectionTitle}>Come curious. Leave changed.</Text><Text style={styles.pageIntro}>Choose a challenge, find teammates, and turn a spark into a working prototype. No experience level is required.</Text></View>{['Tracks & challenges', 'Sponsors', 'FAQ'].map((item) => <Pressable key={item} style={styles.accordion}><Text style={styles.detailStrong}>{item}</Text><Text style={styles.plus}>+</Text></Pressable>)}</ScrollView>;
}

function Resources() {
  const resources = [['◎', 'Instagram', '@innovateher', colors.peach, 'https://www.instagram.com'], ['in', 'LinkedIn', 'InnovateHer Purdue', '#BFD3DF', 'https://www.linkedin.com'], ['⌁', 'Community Discord', 'Join the conversation', '#C6B9D5', 'https://discord.com'], ['@', 'Contact the team', 'innovateher@purdue.edu', '#F0D0A7', 'mailto:innovateher@purdue.edu']];
  return <ScrollView contentContainerStyle={styles.content}><Eyebrow>KEEP EXPLORING</Eyebrow><Text style={styles.pageTitle}>Resources</Text><Text style={styles.pageIntro}>Everything you need to stay connected to the InnovateHer community.</Text>{resources.map(([icon, title, detail, color, url]) => <Pressable key={title} style={styles.resource} onPress={() => Linking.openURL(url)}><Text style={[styles.resourceIcon, { backgroundColor: color }]}>{icon}</Text><View><Text style={styles.detailStrong}>{title}</Text><Text style={styles.mutedText}>{detail}</Text></View><Text style={styles.link}>↗</Text></Pressable>)}</ScrollView>;
}

function About({ go }) {
  return <ScrollView contentContainerStyle={styles.content}><View style={styles.aboutVisual}><Text style={styles.heroMark}>✦</Text><Text style={styles.aboutVisualText}>We build{`\n`}<Text style={styles.peachText}>together.</Text></Text></View><Eyebrow>A COMMUNITY, NOT A CHECKLIST</Eyebrow><Text style={styles.pageTitle}>There is room for your <Text style={styles.peachText}>idea.</Text></Text><Text style={styles.pageIntro}>InnovateHer is a student-led community empowering women and allies to explore technology, entrepreneurship, and leadership without having to do it alone.</Text><Button onPress={() => Linking.openURL('https://forms.google.com')}>Get involved</Button>{[['01', 'Make space', 'Everyone deserves a seat at the table.'], ['02', 'Stay curious', 'Questions are the beginning of every breakthrough.'], ['03', 'Build boldly', 'Small steps can become something extraordinary.']].map(([number, title, copy]) => <View style={styles.value} key={number}><Text style={styles.valueNumber}>{number}</Text><Text style={styles.cardTitle}>{title}</Text><Text style={styles.mutedText}>{copy}</Text></View>)}</ScrollView>;
}

export default function App() {
  const [screen, setScreen] = useState('home');
  const screens = { home: <Home go={setScreen} />, events: <Events go={setScreen} />, hackathon: <Hackathon go={setScreen} />, resources: <Resources />, about: <About /> };
  return <SafeAreaView style={styles.container}><StatusBar style="light" /><View style={styles.topbar}><Pressable onPress={() => setScreen('home')}><View style={styles.logo}><Text style={styles.logoText}>IH</Text></View></Pressable><Text style={styles.brand}>InnovateHer</Text></View><View style={styles.body}>{screens[screen]}</View><View style={styles.nav}>{tabs.map(([id, label]) => <Pressable key={id} onPress={() => setScreen(id)} style={styles.navItem}><Text style={[styles.navIcon, screen === id && styles.selected]}>{['⌂', '◷', '✦', '↗', '♡'][tabs.findIndex(([tab]) => tab === id)]}</Text><Text style={[styles.navLabel, screen === id && styles.selected]}>{label}</Text></Pressable>)}</View></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cream,
  },
  topbar: { height: 72, paddingHorizontal: 22, flexDirection: 'row', alignItems: 'center', backgroundColor: colors.cream },
  logo: { width: 38, height: 38, borderRadius: 19, backgroundColor: colors.blue, alignItems: 'center', justifyContent: 'center' },
  logoText: { color: colors.cream, fontWeight: '700', fontSize: 12 },
  brand: { color: colors.black, fontWeight: '700', fontSize: 16, marginLeft: 10 },
  body: { flex: 1 },
  content: { padding: 22, paddingBottom: 110 },
  hero: { backgroundColor: colors.blue, padding: 26, borderRadius: 3, marginBottom: 28, position: 'relative', overflow: 'hidden' },
  eyebrow: { color: colors.muted, fontSize: 10, fontWeight: '700', letterSpacing: 1.2, marginBottom: 9 },
  heroTitle: { color: colors.cream, fontSize: 38, lineHeight: 42, fontFamily: 'serif', fontWeight: '700', marginBottom: 15, maxWidth: 330 },
  peachText: { color: colors.peach },
  heroCopy: { color: colors.cream, opacity: 0.86, fontSize: 14, lineHeight: 21, marginBottom: 24 },
  heroMark: { color: colors.peach, fontSize: 60, position: 'absolute', right: 14, top: 14 },
  button: { backgroundColor: colors.peach, minHeight: 52, paddingHorizontal: 17, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 3, marginVertical: 18 },
  buttonText: { color: colors.black, fontWeight: '700', fontSize: 14 },
  buttonArrow: { color: colors.black, fontSize: 20 },
  lightButton: { backgroundColor: colors.cream },
  lightButtonText: { color: colors.blue },
  sectionHeader: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 12 },
  sectionTitle: { color: colors.black, fontSize: 27, fontFamily: 'serif', fontWeight: '700', marginBottom: 12 },
  pageTitle: { color: colors.black, fontSize: 42, lineHeight: 47, fontFamily: 'serif', fontWeight: '700', marginBottom: 14 },
  pageIntro: { color: colors.muted, fontSize: 14, lineHeight: 21, marginBottom: 20 },
  link: { color: colors.blue, fontSize: 12, fontWeight: '700' },
  featured: { backgroundColor: colors.peach, padding: 15, flexDirection: 'row', alignItems: 'center', borderRadius: 3 },
  dateTile: { width: 54, height: 60, alignItems: 'center', justifyContent: 'center', marginRight: 13 },
  dateDay: { color: colors.black, fontSize: 24, fontFamily: 'serif', fontWeight: '700' },
  dateMonth: { color: colors.black, fontSize: 9, fontWeight: '700' },
  cardCopy: { flex: 1 },
  tag: { color: colors.green, fontSize: 9, fontWeight: '700', letterSpacing: 1 },
  cardTitle: { color: colors.black, fontSize: 17, fontWeight: '700', marginVertical: 5 },
  mutedText: { color: colors.muted, fontSize: 11 },
  circleArrow: { backgroundColor: colors.blue, color: colors.cream, borderRadius: 18, width: 34, height: 34, textAlign: 'center', textAlignVertical: 'center', fontSize: 18 },
  announcement: { flexDirection: 'row', alignItems: 'center', paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#34556D33', gap: 12 },
  alert: { backgroundColor: colors.orange, color: colors.black, width: 28, height: 28, borderRadius: 14, textAlign: 'center', textAlignVertical: 'center', fontWeight: '700' },
  announcementText: { color: colors.black, fontWeight: '600', fontSize: 12 },
  pills: { flexDirection: 'row', gap: 8, marginBottom: 18 },
  activePill: { backgroundColor: colors.blue, color: colors.cream, borderRadius: 18, paddingVertical: 10, paddingHorizontal: 15, fontSize: 12 },
  pill: { backgroundColor: '#34556D18', color: colors.muted, borderRadius: 18, paddingVertical: 10, paddingHorizontal: 15, fontSize: 12 },
  eventCard: { backgroundColor: '#34556D0D', padding: 13, flexDirection: 'row', alignItems: 'center', marginBottom: 11, borderRadius: 3 },
  chevron: { color: colors.muted, fontSize: 26 },
  hackHeader: { backgroundColor: colors.blue, padding: 24, marginHorizontal: -22, marginTop: 24, marginBottom: 0 },
  detailRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: '#34556D33' },
  detailStrong: { color: colors.black, fontWeight: '700', fontSize: 13, marginBottom: 4 },
  textBlock: { paddingVertical: 25 },
  accordion: { borderTopWidth: 1, borderTopColor: '#34556D33', paddingVertical: 17, flexDirection: 'row', justifyContent: 'space-between' },
  plus: { color: colors.black, fontSize: 20 },
  resource: { backgroundColor: '#34556D0D', padding: 13, flexDirection: 'row', alignItems: 'center', marginBottom: 10, borderRadius: 3 },
  resourceIcon: { width: 38, height: 38, borderRadius: 19, textAlign: 'center', textAlignVertical: 'center', color: colors.black, fontWeight: '700', fontSize: 17, marginRight: 12 },
  aboutVisual: { height: 205, backgroundColor: colors.blue, marginHorizontal: -22, marginBottom: 28, padding: 24, justifyContent: 'flex-end' },
  aboutVisualText: { color: colors.cream, fontFamily: 'serif', fontWeight: '700', fontSize: 38, lineHeight: 40 },
  value: { borderTopWidth: 1, borderTopColor: '#34556D33', paddingTop: 15, marginTop: 18 },
  valueNumber: { color: colors.peach, fontSize: 12, fontWeight: '700', marginBottom: 7 },
  nav: { position: 'absolute', left: 0, right: 0, bottom: 0, height: 76, backgroundColor: colors.cream, borderTopWidth: 1, borderTopColor: '#34556D33', flexDirection: 'row', justifyContent: 'space-around', paddingTop: 9 },
  navItem: { alignItems: 'center', width: 65 },
  navIcon: { color: colors.muted, fontSize: 21, height: 25 },
  navLabel: { color: colors.muted, fontSize: 9, fontWeight: '700' },
  selected: { color: colors.peach },
});
  },
});
