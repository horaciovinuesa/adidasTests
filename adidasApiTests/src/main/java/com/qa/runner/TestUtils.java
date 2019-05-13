package com.qa.runner;

import java.text.SimpleDateFormat;
import java.util.Date;

public class TestUtils {
	
		//Int values for configuration
		static int PAGE_LOAD_TIMEOUT = 20;
		static int IMPLICIT_WAIT = 30;
		
		//String verifications Login and Homepage
		public static String WIKTIONARY_PAGE_TITLE = "Wiktionary, the free dictionary";
		
		//String for screenshot generation
		public static String TIME_STAMP = new SimpleDateFormat("yyyy.MM.dd.HH.mm.ss").format(new Date());

}
