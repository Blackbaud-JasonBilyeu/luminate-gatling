package teamraiser

import scala.concurrent.duration._

import com.excilys.ebi.gatling.core.Predef._
import com.excilys.ebi.gatling.http.Predef._
import bootstrap._
import akka.util.duration._
import org.slf4j.LoggerFactory
import scala.util.Random

class LoginAndCreateTeamraisers extends Simulation {

    private val RNG = new Random

    def randomInt(a:Int, b:Int) = RNG.nextInt(b-a) + a

    val headers_0 = Map(
        "Accept" -> "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
        "Accept-Encoding" -> "gzip, deflate",
        "Accept-Language" -> "en-US,en;q=0.8",
        "Cache-Control" -> "no-cache",
        "Connection" -> "keep-alive",
        "Origin" -> "https://testweb.convio.com",
        "Pragma" -> "no-cache",
        "User-Agent" -> "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36")

    val scn = scenario("Login")
        .repeat(2)
        {
            exec(http("Login")
                .post("https://testweb.convio.com/patchtest14/admin/ConvioLogin")
                .headers(headers_0)
                .param("USERNAME_1447079233741", "convio")
                .param("Password_1447079233741", "Password0")
                .param("convioPassword_1447079233741", "Super")
                .param("NEXTURL", "https://testweb.convio.com/patchtest14/admin/TREdit")
                .param("login", "Log+In"))
            exec(http("Create TeamRaiser")
                    .post("https://testweb.convio.com/patchtest14/admin/TREdit")
                    .param("namesubmit", "true")
                    .param("namename", "Jason Test " + randomInt(100,10000))
                    .param("sec_catsubmit", "true")
                    .param("securityList.sec_cat", "1")
                    .param("event_date_DATE_STRING", "11%2F09%2F2015")
                    .param("event_datesubmit", "true")
                    .param("fr_statusname", "2")
                    .param("fr_statussubmit", "true")
                    .param("don_form_auto_createsubmit", "true")
                    .param("don_form_auto_create", "standard")
                    .param("donation_select_listname", "-1.-1")
                    .param("donation_select_listsubmit_skip", "true")
                    .param("standard_merchant_accountname", "1")
                    .param("standard_merchant_accountsubmit", "true")
                    .param("responsive_merchant_accountname", "1")
                    .param("responsive_merchant_accountsubmit_skip", "true")
                    .param("participation_typesubmit", "true")
                    .param("participation_typename", "TEST" + randomInt(100,10000))
                    .param("participation_feesubmit", "true")
                    .param("participation_feeinput", "")
                    .param("action", "create_teamraiser")
                    .param("tr", "teamraiser_quick_create")
                    .param("pstep_finish", "Finish")
                    .check(bodyString.saveAs("body"))
                    .check(status.is(200)))
            }


    setUp(scn.users(1).ramp(30 seconds))
   }