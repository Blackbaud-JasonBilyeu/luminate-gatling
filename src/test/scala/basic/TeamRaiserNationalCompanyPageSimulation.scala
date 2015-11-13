package basic

import com.excilys.ebi.gatling.core.Predef._
import com.excilys.ebi.gatling.http.Predef._
import bootstrap._
import akka.util.duration._
import org.slf4j.LoggerFactory
import java.util.Random

class TeamRaiserNationalCompanyPageSimulation extends Simulation {
  val logger = LoggerFactory.getLogger("basic.test")
  val loginHeader = Map("Accept" -> "application/json", "Content-Type" -> "application/x-www-form-urlencoded")
  val jsonType = Map("Accept" -> "application/json")
  val numUsers = 50
  val numRepeats = 5

  val hitNationalCompanyPageScn = scenario("Hit National Company Page")
    .repeat(numRepeats)
    {
      exec(http("Hit National Company Page")
        .get("http://bvtorg1003.bvtorg10.conviocloud.com/site/TR?company_id=32893&fr_id=70798&pg=national_company")
        .check(bodyString.saveAs("body"))
        .check(status.is(200))
      )
  }

  setUp(hitNationalCompanyPageScn.users(numUsers).ramp(30 seconds))

}
