// using IDs from https://stratz.com/heroes
var heroes = {
	abaddon: { id: 102, abbr: ['avernus'] },
	alchemist: { id: 73, abbr: ['razzil'] },
	'ancient apparition': { id: 68, abbr: ['kaldr', 'aa'] },
	antimage: { id: 1, abbr: ['am'] },
	'arc warden': { id: 113, abbr: ['aw'] },
	axe: { id: 2, abbr: [] },
	bane: { id: 3, abbr: ['atropos'] },
	batrider: { id: 65, abbr: [] },
	beastmaster: { id: 38, abbr: ['karroch', 'rexxar', 'bm'] },
	bloodseeker: { id: 4, abbr: ['strygwyr', 'bs'] },
	'bounty hunter': { id: 62, abbr: ['gondar', 'bh'] },
	brewmaster: { id: 78, abbr: ['mangix', 'bm'] },
	bristleback: { id: 99, abbr: ['rigwarl', 'bb'] },
	broodmother: { id: 61, abbr: ['bm'] },
	'centaur warrunner': { id: 96, abbr: ['bradwarden', 'cw'], img: 'centaur' },
	'chaos knight': { id: 81, abbr: ['ck'] },
	chen: { id: 66, abbr: [] },
	clinkz: { id: 56, abbr: ['bone'] },
	clockwerk: { id: 51, abbr: ['rattletrap', 'cw'], img: 'rattletrap' },
	'crystal maiden': { id: 5, abbr: ['rylai', 'cm'] },
	'dark seer': { id: 55, abbr: ['ish', 'ds'] },
	'dark willow': { id: 119, abbr: ['dw'] },
	dawnbreaker: { id: 135, abbr: ['db'] },
	dazzle: { id: 50, abbr: [] },
	'death prophet': { id: 43, abbr: ['krobelus', 'grobulus', 'dp'] },
	disruptor: { id: 87, abbr: [] },
	doom: { id: 69, abbr: [], img: 'doom bringer' },
	'dragon knight': { id: 49, abbr: ['davion', 'dk'] },
	'drow ranger': { id: 6, abbr: ['traxex', 'dr'] },
	earthshaker: { id: 7, abbr: ['raigor', 'es'] },
	'earth spirit': { id: 107, abbr: ['kaolin', 'es'] },
	'elder titan': { id: 103, abbr: ['et'] },
	'ember spirit': { id: 106, abbr: ['xin', 'es'] },
	enchantress: { id: 58, abbr: ['aiushtha'] },
	enigma: { id: 33, abbr: [] },
	'faceless void': { id: 41, abbr: ['darkterror'] },
	grimstroke: { id: 121, abbr: [] },
	gyrocopter: { id: 72, abbr: ['aurel'] },
	hoodwink: { id: 123, abbr: [] },
	huskar: { id: 59, abbr: [] },
	invoker: { id: 74, abbr: ['kael', 'karl', 'carl'] },
	io: { id: 91, abbr: ['wisp'], img: 'wisp' },
	jakiro: { id: 64, abbr: ['thd'] },
	juggernaut: { id: 8, abbr: ['yurnero'] },
	'keeper of the light': { id: 90, abbr: ['ezalor', 'kotl'] },
	kunkka: { id: 23, abbr: [] },
	'legion commander': { id: 104, abbr: ['tresdin', 'lc'] },
	leshrac: { id: 52, abbr: ['ts'] },
	lich: { id: 31, abbr: ['ethreain'] },
	lifestealer: { id: 54, abbr: ['naix'], img: 'life stealer' },
	lina: { id: 25, abbr: [] },
	lion: { id: 26, abbr: [] },
	'lone druid': { id: 80, abbr: ['sylla', 'ld'] },
	luna: { id: 48, abbr: [] },
	lycan: { id: 77, abbr: ['banehallow'] },
	magnus: { id: 97, abbr: [], img: 'magnataur' },
	marci: { id: 136, abbr: [] },
	mars: { id: 129, abbr: [] },
	medusa: { id: 94, abbr: ['gorgon'] },
	meepo: { id: 82, abbr: ['geomancer'] },
	mirana: { id: 9, abbr: ['potm'] },
	'monkey king': { id: 114, abbr:['mk'] },
	morphling: { id: 10, abbr: [] },
	'naga siren': { id: 89, abbr: ['slithice', 'ns'] },
	'natures prophet': { id: 53, abbr: ['furion', 'np'], img: 'furion' },
	necrophos: { id: 36, abbr: [], img: 'necrolyte' },
	'night stalker': { id: 60, abbr: ['ns', 'balanar'] },
	'nyx assassin': { id: 88, abbr: ['na'] },
	'ogre magi': { id: 84, abbr: ['aggron', 'om'] },
	omniknight: { id: 57, abbr: ['ok'] },
	oracle: { id: 111, abbr: [] },
	'outworld devourer': {
		id: 76,
		abbr: ['od', 'harbinger'],
		img: 'obsidian destroyer',
	},
	pangolier: { id: 120, abbr: [] },
	'phantom assassin': { id: 44, abbr: ['pa', 'mortred'] },
	'phantom lancer': { id: 12, abbr: ['azwraith', 'pl'] },
	phoenix: { id: 110, abbr: [] },
	'primal beast': { id: 137, abbr: ['pb'] },
	puck: { id: 13, abbr: [] },
	pudge: { id: 14, abbr: ['butcher'] },
	pugna: { id: 45, abbr: [] },
	'queen of pain': { id: 39, abbr: ['akasha', 'qop'], img: 'queenofpain' },
	razor: { id: 15, abbr: [] },
	riki: { id: 32, abbr: [] },
	rubick: { id: 86, abbr: [] },
	'sand king': { id: 16, abbr: ['crixalis', 'sk'] },
	'shadow demon': { id: 79, abbr: ['sd'] },
	'shadow fiend': { id: 11, abbr: ['nevermore', 'sf'], img: 'nevermore' },
	'shadow shaman': { id: 27, abbr: ['rhasta', 'ss'] },
	silencer: { id: 75, abbr: ['nortrom'] },
	'skywrath mage': { id: 101, abbr: ['dragonus', 'sm'] },
	slardar: { id: 28, abbr: [] },
	slark: { id: 93, abbr: [] },
	snapfire: { id: 128, abbr: [] },
	sniper: { id: 35, abbr: ['kardel'] },
	spectre: { id: 67, abbr: ['mercurial'] },
	'spirit breaker': { id: 71, abbr: ['barathrum', 'sb'] },
	'storm spirit': { id: 17, abbr: ['raijin', 'ss'] },
	sven: { id: 18, abbr: [] },
	techies: { id: 105, abbr: ['goblin', 'gt', 'sqee', 'spleen', 'spoon'] },
	'templar assassin': { id: 46, abbr: ['lanaya', 'ta'] },
	terrorblade: { id: 109, abbr: ['tb'] },
	tidehunter: { id: 29, abbr: ['leviathan'] },
	timbersaw: { id: 98, abbr: ['rizzrack'], img: 'shredder' },
	tinker: { id: 34, abbr: ['boush'] },
	tiny: { id: 19, abbr: [] },
	'treant protector': { id: 83, abbr: ['rooftrellen'], img: 'treant' },
	'troll warlord': { id: 95, abbr: ['tw'] },
	tusk: { id: 100, abbr: ['ymir'] },
	underlord: { id: 108, abbr: [], img: 'abyssal underlord' },
	undying: { id: 85, abbr: ['dirge'] },
	'vengeful spirit': {
		id: 20,
		abbr: ['shendelzare', 'vs'],
		img: 'vengefulspirit',
	},
	ursa: { id: 70, abbr: [] },
	venomancer: { id: 40, abbr: ['lesale'] },
	viper: { id: 47, abbr: [] },
	visage: { id: 92, abbr: [] },
	'void spirit': { id: 126, abbr: ['vs'] },
	warlock: { id: 37, abbr: ['demnok', 'wl'] },
	weaver: { id: 63, abbr: ['skitskurr'] },
	windranger: { id: 21, abbr: ['lyralei', 'wr'], img: 'windrunner' },
	'winter wyvern': { id: 112, abbr: ['ww'] },
	'witch doctor': { id: 30, abbr: ['zharvakko', 'wd'] },
	'wraith king': {
		id: 42,
		abbr: ['ostarion', 'skeleton king', 'wk', 'sk'],
		img: 'skeleton king',
	},
	zeus: { id: 22, abbr: [], img: 'zuus' }, // zuus wtf???
};

var heroesById = Object.entries(heroes).reduce(
	(obj, [key, value]) => ({ ...obj, [value.id]: key }),
	{}
);

var getHeroImgUrl = hero => {
	const imgName = heroes[hero].img || hero;
	return `https://cdn.stratz.com/images/dota2/heroes/${imgName.replaceAll(
		' ',
		'_'
	)}_horz.png`;
};

var queryHero = async heroId => {
	// free STRATZ API token... cant do much even if you steal it
	const apiToken = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiJodHRwczovL3N0ZWFtY29tbXVuaXR5LmNvbS9vcGVuaWQvaWQvNzY1NjExOTgyNjc1NTE3ODQiLCJ1bmlxdWVfbmFtZSI6InljeSIsIlN1YmplY3QiOiIwODBhYzM2OS0wNTIwLTRiNWUtOGQ4Yi0xY2U0MWFkNDlhNWQiLCJTdGVhbUlkIjoiMzA3Mjg2MDU2IiwibmJmIjoxNjUxMzY5OTA0LCJleHAiOjE2ODI5MDU5MDQsImlhdCI6MTY1MTM2OTkwNCwiaXNzIjoiaHR0cHM6Ly9hcGkuc3RyYXR6LmNvbSJ9.yT6unXwYH1jwFBonzM_AP9FQ7xu5dI4B-7zwml9wS3g';
	const headers = {
		Authorization: apiToken,
	};
	const apiURL = 'https://api.stratz.com/graphql';
	const postData = heroId => [
		{
			operationName: 'GetHeroMatchup',
			variables: {
				heroId: parseInt(heroId),
			},
			query: 'query GetHeroMatchup($heroId: Short!, $bracketBasicIds: [RankBracketHeroTimeDetail]) {\n  heroStats {\n    heroVsHeroMatchup(heroId: $heroId, bracketBasicIds: $bracketBasicIds) {\n      advantage {\n        ...HeroDryad\n        __typename\n      }\n      disadvantage {\n        ...HeroDryad\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment HeroDryad on HeroDryadType {\n  with {\n    ...HeroStatsHeroDryad\n    __typename\n  }\n  vs {\n    ...HeroStatsHeroDryad\n    __typename\n  }\n  __typename\n}\n\nfragment HeroStatsHeroDryad on HeroStatsHeroDryadType {\n  heroId1\n  heroId2\n  synergy\n  __typename\n}\n',
		},
	];
	const options = {
		url: apiURL,
		type: 'post',
		headers,
		dataType: 'json',
		contentType: 'application/json',
		data: JSON.stringify(postData(heroId)),
	}
	const res = await $.ajax(options);
	const advantageMatchupData =
		res[0].data.heroStats.heroVsHeroMatchup.advantage[0].vs;
	const disadvantageMatchupData =
		res[0].data.heroStats.heroVsHeroMatchup.disadvantage[0].vs;
	const hero = heroesById[heroId];
	heroes[hero].matchups = {};

	advantageMatchupData.forEach(matchup => {
		heroes[hero].matchups[matchup.heroId2] = matchup.synergy;
	});
	disadvantageMatchupData.forEach(matchup => {
		heroes[hero].matchups[matchup.heroId2] = -1 * matchup.synergy;
	});
}

var WinrateCalculator = {
	VERSION: '0.7.1',
	UPDATED: '2022-04-30',

	initialized: false,

	initialize: function () {
		this.lineup = [-1, -1, -1, -1, -1];
		this.initialized = true;
	},

	checkHeroAbbr: function (hero, name) {
		var heroAbbr = heroes[hero.toLowerCase()].abbr;

		if (_.isUndefined(name) || _.isUndefined(heroAbbr)) return false;

		name = name.toLowerCase();

		for (var i = 0; i < heroAbbr.length; ++i)
			if (heroAbbr[i].indexOf(name) >= 0) return true;

		return false;
	},

	listHeroes: function (name) {
		$('#hero-list').html('');

		_.each(heroes, function (heroAttrs, heroName) {
			if (
				!_.isUndefined(name) &&
				!WinrateCalculator.checkHeroAbbr(heroName, name) &&
				heroName.toLowerCase().indexOf(name.toLowerCase()) < 0
			) {
				return;
			}

			$('#hero-list').append(
				$('<li>')
					.attr('data-hero-id', heroAttrs.id)
					.html(
						$('<img width="100px" height="70px">').attr(
							'src',
							getHeroImgUrl(heroName)
						)
					)
					.append(heroName)
			);
		});
	},

	calculate: function () {
		Object.keys(heroes).forEach(hero => heroes[hero].advantage = 0.0);
		this.lineup.forEach(hid => {
			if (hid === -1) return;
			const matchups = Object.entries(heroes[heroesById[hid]].matchups)
			matchups.forEach(([heroId, advantage]) => { heroes[heroesById[heroId]].advantage += advantage});
		});
	},

	generateLink: function () {
		var link = '#';

		for (var i in this.lineup) {
			if (this.lineup[i] == -1) link += '/';
			else link += heroes[this.lineup[i]] + '/';
		}

		link = link.replace(/ /g, '_');
		link = link.replace(/\/+$/, '');

		return link;
	},

	getVersion: function () {
		return this.VERSION + '.' + this.UPDATED;
	},
};

var MainView = Backbone.View.extend({
	el: '#main-container',

	initialize: function () {
		this.$el.html(_.template($('#main-view-template').html()));
		WinrateCalculator.listHeroes();
		$('#hero-search').focus();
	},

	events: {
		'keyup #hero-search': 'heroSearch',
		'click #hero-search-reset': 'heroSearchReset',
		'click #hero-list li': 'addHero',
		'click div.lineup div.col-md-2 img': 'removeHero',
		'click #reset-all': 'resetAll',
		'submit form': function () {
			return false;
		},
	},

	heroSearch: function (ev) {
		// reset if Esc pressed
		if (ev.keyCode == 27) {
			$(ev.currentTarget).val('');
			this.heroSearchReset();
		}
		// add first hero if enter pressed
		else if (ev.keyCode == 13) {
			this.addFirstHero();
		} else {
			WinrateCalculator.listHeroes($(ev.currentTarget).val());
		}

		return false;
	},

	heroSearchReset: function () {
		WinrateCalculator.listHeroes();
	},

	switchLink: function () {
		var link = WinrateCalculator.generateLink();
		location.href = link;
	},

	addFirstHero: function () {
		$('#hero-list li:first').trigger('click');
	},

	addHero: async function (ev) {
		var hid = $(ev.currentTarget).attr('data-hero-id');
		var pick_i = -1;

		this.heroSearchReset();
		$('#hero-search').val('');
		$('#hero-search').focus();

		for (var i in WinrateCalculator.lineup)
			if (WinrateCalculator.lineup[i] == hid) return;

		for (var i in WinrateCalculator.lineup) {
			if (WinrateCalculator.lineup[i] == -1) {
				pick_i = i;
				break;
			}
		}

		if (pick_i == -1) return;

		if (!heroes[heroesById[hid]].matchups) await queryHero(hid);

		WinrateCalculator.lineup[pick_i] = hid;

		$('#hero-' + pick_i).html(
			$('<img>')
				.attr('src', getHeroImgUrl(heroesById[hid]))
				.attr('data-idx', pick_i)
		);

		this.calculateAndShow();
		this.switchLink();
	},

	addHeroToIndex: function (hid, pick_i) {
		$('#hero-' + pick_i).html(
			$('<img>')
				.attr('src', getHeroImgUrl(heroesById[hid]))
				.attr('data-idx', pick_i)
		);
	},

	removeHero: function (ev) {
		var i = $(ev.currentTarget).attr('data-idx');
		WinrateCalculator.lineup[i] = -1;
		$('#hero-' + i).html('');

		this.calculateAndShow();
		this.switchLink();
	},

	resetAll: function () {
		for (var i = 0; i < 5; ++i) {
			WinrateCalculator.lineup[i] = -1;
			$('#hero-' + i).html('');
		}

		this.calculateAndShow();
		this.switchLink();
	},

	isEmpty: function () {
		for (var i in WinrateCalculator.lineup)
			if (WinrateCalculator.lineup[i] != -1) return false;
		return true;
	},

	showAdvantages: function (div, sortedHeroes) {
		var template = $('#counter-template').html();
		$('#' + div).html('');
		sortedHeroes.forEach(([heroName, heroAttrs]) => {
			for (var l in WinrateCalculator.lineup)
				if (heroAttrs.id == WinrateCalculator.lineup[l]) return;
			$('#' + div).append(
				_.template(template, {
					hero_bg: getHeroImgUrl(heroName),
					hero_name: heroName,
					win_rate: 0.5,
					advantage: heroAttrs.advantage.toFixed(2),
				})
			);
		});
	},

	calculateAndShow: function () {
		if (this.isEmpty()) {
			$('div.lineup-title').show();
			$('div.pick-title').hide();
			$('#reset-all').hide();
			$('#counters').hide();
			return;
		} else {
			$('div.lineup-title').hide();
			$('div.pick-title').show();
			$('#reset-all').show();
			$('#counters').show();
		}

		WinrateCalculator.calculate();

		const sortedHeroes = [...Object.entries(heroes)].sort((hero1, hero2) => hero1[1].advantage - hero2[1].advantage);

		this.showAdvantages(
			'worse-picks',
			sortedHeroes.slice(0, sortedHeroes.length / 2)
		);

		this.showAdvantages(
			'best-picks',
			sortedHeroes.reverse().slice(0, sortedHeroes.length / 2)
		);

		$('#counters').scrollTop(0);
	},
});

var AppRouter = Backbone.Router.extend({
	initialize: function () {
		this.route(/^(.*?)$/, 'sozdeHerolar');
		this.route(/^about$/, 'about');
	},

	sozdeHerolar: function (heroSelection) {
		if (WinrateCalculator.initialized) return;
		else WinrateCalculator.initialize();

		var mainView = new MainView();

		if (_.isNull(heroSelection)) return;

		heroSelection = heroSelection.replace(/_/g, ' ');
		var selectedHeroes = heroSelection.split('/');

		for (var i in selectedHeroes) {
			if (i > 4) break;

			if (_.isEmpty(selectedHeroes[i])) continue;

			var hid =
				_.find(WinrateCalculator.heroes, selectedHeroes[i].toLowerCase())
					?.id || -1;

			if (hid == -1) continue;

			WinrateCalculator.lineup[i] = hid;
			mainView.addHeroToIndex(hid, i);
		}

		mainView.calculateAndShow();
	},

	about: function () {
		$('#main-container').html(
			_.template($('#about-page').html(), {
				version: WinrateCalculator.VERSION,
				last_update: WinrateCalculator.UPDATED,
			})
		);
		WinrateCalculator.initialized = false;
	},
});

$(document).ready(function () {
	// set version
	$('#version').text(WinrateCalculator.getVersion());

	var appRouter = new AppRouter();

	Backbone.history.start({ pushState: false, root: '/WinrateCalculator/' });
});
